import express from "express";
import { getOverview } from "../controllers/admin.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/overview", auth, roleMiddleware("admin"), getOverview);

export default router;
