import jwt from "jsonwebtoken";

// Check if user is logged in
export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: "You are Authenticated" });
};

// Check if user is admin
export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.access_token;

  if (!token)
    return res.status(401).json({
      message: "Not authenticated!",
    });

  jwt.verify(token, process.env.JWT_SECRET, async (error, payload) => {
    if (error) return res.status(403).json({ message: "Token is not valid" });

    if (!payload.isAdmin) {
      return res.status(403).json({ message: "Not autorized" });
    }
  });

  res.status(200).json({ message: "You are Authenticated" });
};
