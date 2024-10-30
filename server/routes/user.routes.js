import { Router } from "express";
import { loginUser, logoutUser } from "../controllers/User.Controllers.js";
import { verifyToken } from "../middleware/jwt.js";

const router = Router();

router.post('/login', loginUser);
router.get('/logout', logoutUser);

export default router;