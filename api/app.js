import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env before using any variable

//I am using prisma as database ORM so no need to use mongoose
// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(process.env.port, () => {
//       console.log(`Server is running on port ${process.env.port}`);
//     });
//   })
//   .catch((error) => console.log("Mongodb connection error:", error));

const app = express();

// Allow all origins (for development only)
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// OR allow only your frontend origin

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true, // allows requests only from frontend
  })
);

app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(` Server is running on ${port}`);
});
