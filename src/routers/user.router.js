import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";
import { authUser } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authUser, loginUser);

export default router;
