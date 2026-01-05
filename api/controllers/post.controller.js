import prisma from "../lib/prisma.js";

// Get All Posts
export const getPosts = async (req, res) => {
  const posts = await prisma.post.findMany();
  try {
    // res.status(200).json({ message: "Get posts success" });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fil to get posts" });
  }
};

// Get Single Post
export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id },

      include: {
        postDetails: true,
        user: {
          select: { username: true, avatar: true },
        },
      },
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fail to get post" });
  }
};

// Create Post
// export const addPost = async (req, res) => {
//   const body = req.body;
//   const tokenUserId = req.userId;
//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         ...body.postData,
//         userId: tokenUserId,
//         postDetails: {
//           create: body.postDetails,
//         },
//       },
//     });

//     res.status(200).json(newPost);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Fail to add post" });
//   }
// };

export const addPost = async (req, res) => {
  const { postData, postDetails } = req.body;
  const tokenUserId = req.userId; // from verifyToken middleware

  try {
    const newPost = await prisma.post.create({
      data: {
        ...postData, // all post fields
        userId: tokenUserId, // link post to logged-in user
        postDetails: postDetails
          ? { create: postDetails } // create related postDetails if provided
          : undefined,
      },
      include: {
        postDetails: true,
        user: {
          select: { username: true, avatar: true },
        },
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error creating post:", error);
    res.status(500).json({ message: "Fail to add post" });
  }
};

// Update Post
export const updatePost = async (req, res) => {
  try {
    res.status(200).json({ message: "Update post success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fail to update post" });
  }
};

// Delete Post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;

  try {
    // const post = await prisma.post.findUnique({ where: { id } });
    const post = await prisma.post.findUnique({
      where: { id },
    });

    if (post.userId !== tokenUserId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this post" });
    }

    await prisma.post.delete({ where: { id } });
    res.status(200).json({ message: "Delete post success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fail to delete post" });
  }
};
