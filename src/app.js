import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import adminRoutes from "./routes/admin.routes.js";

import errorHandler from "./middleware/error.middleware.js";
import rateLimit from "./middleware/rateLimit.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit);

app.get("/", (req, res) => {
  res.send("Project Backend finance api 👋");
});

app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/categories", categoryRoutes);
app.use("/upload", uploadRoutes);
app.use("/admin", adminRoutes);

app.use(errorHandler);

export default app;
