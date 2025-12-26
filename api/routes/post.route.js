// import express from "express";

// const router = express.Router();

// router.post("/register", (req, res) => {
//   res.send("Route working");
// });

// router.post("/login", (req, res) => {
//   res.send("Posts route working");
// });

// router.post("/logout", (req, res) => {
//   res.send("Posts route working");
// });

// export default router;

import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
