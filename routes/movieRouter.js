import express from "express";
const router = express.Router();
import { index, show, update, storeReview } from "../controllers/movieController.js";

// index
router.get("/", index);

// show
router.get("/:id", show);

// update
router.patch("/:id", update);

// store review
router.post("/:id/reviews", storeReview);

export default router;