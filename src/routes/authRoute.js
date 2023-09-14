import express from "express";

import authController from "../controllers/authController";
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/loginWithGoogle", authController.loginWithGoogle);
router.post("/logout", authController.logout);
export default router;
