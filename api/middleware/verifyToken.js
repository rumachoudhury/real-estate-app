import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; // Assuming the token is stored in a cookie named 'access_token'

  if (!token)
    return res.status(401).json({
      message: "Not authenticated!",
    });

  jwt.verify(token, process.env.JWT_SECRET, async (error, payload) => {
    if (error) return res.status(403).json({ message: "Token is not valid" });
    req.userId = payload.id; // Attach the user ID to the request object
    next(); //if the token is valid, proceed to the next
  });
};
