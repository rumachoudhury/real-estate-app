import express from "express";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controllers/chat.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";

router.get("/", verifyToken, getChats); // Get all chats for the authenticated user because user log in first then only they can access the chats
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);

export default router;
const router = express.Router();
