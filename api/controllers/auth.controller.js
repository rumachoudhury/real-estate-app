import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash password before saving to database (security)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user record in database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    // Compare entered password with hashed password in DB
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    // Generate JWT token containing user identity
    // const age = 60 * 60; //1 hour
    const age = 60 * 60 * 24 * 7; // 7 days in seconds

    const token = jwt.sign(
      { id: user.id, username: user.username, isAdmin: true },
      process.env.JWT_SECRET,
      // { expiresIn: "1d" }
      { expiresIn: age }
    );

    // Remove password before sending user data
    const { password: _, ...userInfo } = user;

    // Send JWT as secure httpOnly cookie
    res
      .cookie("access_token", token, {
        httpOnly: true, // prevents JS access (XSS protection)
        // secure: process.env.NODE_ENV === "production", // HTTPS only in prod
        // sameSite: "strict", // CSRF protection
        secure: false, // localhost
        sameSite: "lax",
        // maxAge: 60 * 60 * 1000, // 1 hour
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Failed to login!" });
  }
};

export const logout = async (req, res) => {
  // Clear authentication cookie to log user out
  res.clearCookie("access_token", {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    // sameSite: "strict",

    secure: false, // localhost
    sameSite: "lax", // ✅ MUST MATCH
    path: "/", // ✅ VERY IMPORTANT
  });

  res.status(200).json({ message: "User logged out successfully" });
};
