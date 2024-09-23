import express from "express";
import { getUserDetails, loginUser, registerUser } from "../controller/userController.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/getuserdetails', getUserDetails)


export default router;