import express from "express";
import { createProject, deleteProject, getProject, getProjects, updateProject } from "../controller/projectController.js";


const router = express.Router();

router.post('/createproject', createProject);
router.post('/getproject', getProjects);
router.post('/deleteproject', deleteProject);
router.post('/getpro', getProject);  // single project get;
router.post('/updateproject', updateProject); 


export default router;