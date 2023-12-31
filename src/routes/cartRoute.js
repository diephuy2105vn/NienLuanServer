import express from "express";
import cartController from "../controllers/cartController";

const router = express.Router();

router.get("/:id", cartController.getCart);
router.post("/:id", cartController.addDetail);
router.put("/:id", cartController.changeQuantity);
router.delete("/:id", cartController.deleteDetail);
export default router;
