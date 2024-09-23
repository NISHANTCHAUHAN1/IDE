import express from "express";
import { createProject, deleteProject, getProject } from "../controller/projectController.js";


const router = express.Router();

router.post('/createproject', createProject);
router.post('/getproject', getProject);
router.post('/deleteproject', deleteProject)


export default router;