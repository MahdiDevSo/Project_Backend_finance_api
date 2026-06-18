import express from "express";
import {
  createTransaction,
  getTransactions,
  deleteTransaction,
  monthlySummary,
} from "../controllers/transaction.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, createTransaction);
router.get("/", auth, getTransactions);
router.get("/monthly-summary", auth, monthlySummary);
router.delete("/:id", auth, deleteTransaction);

export default router;
