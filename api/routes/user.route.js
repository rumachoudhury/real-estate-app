import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", verifyToken, getUser); //verifyToken to protect the route

router.put("/:id", verifyToken, updateUser);

router.delete("/:id", verifyToken, deleteUser);

export default router;
