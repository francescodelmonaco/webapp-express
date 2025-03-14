import express from "express";
const router = express.Router();
import { index, show } from "../controllers/movieController.js";

// index
router.get("/", index);

// show
router.get("/:id", show);

export default router;