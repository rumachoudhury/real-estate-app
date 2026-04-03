// lib/loaders.js
import apiRequest from "./apiRequest.js";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({ params }) => {
  try {
    const res = await apiRequest("/posts/" + params.id);

    // If backend returns an error or not found
    if (!res || res.status === 404) {
      throw new Response("Post Not Found", { status: 404 });
    }

    return res.data; // Return the post data
  } catch (error) {
    console.error("Error loading single page:", error);

    // Throw a response so React Router shows the ErrorBoundary
    throw new Response("Failed to load post", { status: 500 });
  }
};

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1] || "";
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};
