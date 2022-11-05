import express from "express";
import { ReceivableController } from "../controllers/ReceivableController";
const router = express.Router();
const receivable = new ReceivableController();

router.post("/insert", receivable.insertReceivable);
router.get("/read", receivable.getReceivables);
router.delete("/delete", receivable.deleteReceivable);
router.patch("/update", receivable.updateReceivable);
export { router };
