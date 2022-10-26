import express from "express";
import { ReceivableController } from "../controllers/ReceivableController";
const router = express.Router();
const receivable = new ReceivableController();

router.post("/insert", receivable.insertReceivable);
export { router };
