// import prisma from "../lib/prisma.js";
// import express from "express";

// const router = express.Router();

// router.post("/:chatId", addMessage);
// router.get("/:chatId", getMessages);

// const addMessage = async (req, res) => {
//   const tokenUserId = req.userId;
//   const chatId = req.params.chatId;
//   const text = req.body.text;

//   try {
//     // const chat = await prisma.chat.findUnique({
//     const chat = await prisma.chat.findFirst({
//       where: {
//         id: chatId,
//         userIDs: {
//           hasSome: [tokenUserId], // Ensure the user is part of the chat
//         },
//       },
//     });

//     if (!chat) return res.status(404).json({ message: "Chat not found!" });

//     // Create the new message
//     const message = await prisma.message.create({
//       data: {
//         text,
//         chatId,
//         userId: tokenUserId,
//       },
//     });

//     // Update the chat's lastMessage and seenBy fields
//     await prisma.chat.update({
//       where: {
//         id: chatId,
//       },
//       data: {
//         seenBy: [tokenUserId],
//         lastMessage: text,
//       },
//     });

//     res.status(200).json(message);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to add message!" });
//   }
// };

// const getMessages = async (req, res) => {
//   const tokenUserId = req.userId;
//   const chatId = req.params.chatId;

//   try {
//     const chat = await prisma.chat.findFirst({
//       where: {
//         id: chatId,
//         userIDs: {
//           hasSome: [tokenUserId], // Ensure the user is part of the chat
//         },
//       },
//     });

//     if (!chat) return res.status(404).json({ message: "Chat not found!" });

//     const messages = await prisma.message.findMany({
//       where: { chatId },
//       orderBy: { createdAt: "asc" },
//     });

//     res.status(200).json(messages);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Failed to get messages!" });
//   }
// };

// export default router;

// -------
import express from "express";
import prisma from "../lib/prisma.js";

const router = express.Router();

/* ---------------- CONTROLLERS ---------------- */

const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;

  try {
    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });

    const message = await prisma.message.create({
      data: {
        text,
        chatId,
        userId: tokenUserId,
      },
    });

    await prisma.chat.update({
      where: { id: chatId },
      data: {
        seenBy: [tokenUserId],
        lastMessage: text,
      },
    });

    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};

const getMessages = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;

  try {
    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });

    const messages = await prisma.message.findMany({
      where: { chatId },
      orderBy: { createdAt: "asc" },
    });

    res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get messages!" });
  }
};

/* ---------------- ROUTES ---------------- */

router.post("/:chatId", addMessage);
router.get("/:chatId", getMessages);

export default router;
