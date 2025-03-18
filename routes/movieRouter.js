import express from "express";
const router = express.Router();
import { index, show, update } from "../controllers/movieController.js";

// index
router.get("/", index);

// show
router.get("/:id", show);

// update
router.patch("/:id", update);

export default router;