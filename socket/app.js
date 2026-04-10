// import { Server } from "socket.io";

// const io = new Server({
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

// let onlineUser = [];

// const addUser = (userId, socketId) => {
//   const userExits = onlineUser.find((user) => user.userId === userId);
//   if (!userExits) {
//     onlineUser.push({ userId, socketId });
//   }
// };

// const removeUser = (socketId) => {
//   onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
// };

// const getUser = (userId) => {
//   return onlineUser.find((user) => user.userId === userId);
// };

// io.on("connection", (socket) => {
//   socket.on("newUser", (userId) => {
//     addUser(userId, socket.id);
//   });

//   socket.on("sendMessage", ({ receiverId, data }) => {
//     const receiver = getUser(receiverId);
//     io.to(receiver.socketId).emit("getMessage", data);
//   });

//   socket.on("disconnect", () => {
//     removeUser(socket.id);
//   });
// });

// io.listen("4000");

// --------
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

// ---------------- SOCKET SETUP ----------------
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// ---------------- ONLINE USERS ----------------
let onlineUsers = [];

// Add user
const addUser = (userId, socketId) => {
  const exists = onlineUsers.find((u) => u.userId === userId);

  if (!exists) {
    onlineUsers.push({ userId, socketId });
  }
};

// Remove user
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((u) => u.socketId !== socketId);
};

// Get user
const getUser = (userId) => {
  return onlineUsers.find((u) => u.userId === userId);
};

// ---------------- SOCKET EVENTS ----------------
io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  // When user logs in
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log("👤 Online users:", onlineUsers);
  });

  // Send message
  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);

    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  // Disconnect
  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("User disconnected:", socket.id);
  });
});

// ---------------- START SERVER ----------------
server.listen(4000, () => {
  console.log("Socket server running on http://localhost:4000");
});
