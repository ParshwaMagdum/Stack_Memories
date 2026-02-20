import express from "express";
import { getposts,createPost } from "../controllers/posts";

const router = express.Router();

router.get("/", getposts);

routes.post("/", createPost);

export default router;