import { Project } from "../model/projectModel.js";
import { User } from "../model/userModel.js";

export const createProject = async (req, res) => {
  let { userId, title } = req.body;
  let user = await User.findOne({ _id: userId });
  if (user) {
    let project = await Project.create({
      title: title,
      createdBy: userId,
    });

    return res.json({
      success: true,
      message: "Project created successfully",
      projectId: project._id,
    });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
};

export const getProjects = async (req, res) => {
  let { userId } = req.body;
  let user = await User.findOne({ _id: userId });
  if (user) {
    let projects = await Project.find({ createdBy: userId });
    return res.json({
      success: true,
      message: "Projects fetched successfully",
      projects: projects,
    });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
};

export const deleteProject = async (req, res) => {
  let { userId, progId } = req.body;
  let user = await User.findOne({ _id: userId });
  if (user) {
    let project = await Project.findOneAndDelete({ _id: progId });
    return res.json({ success: true, message: "Project deleted successfully" });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
};

export const getProject = async (req, res) => {
  let { userId, projId } = req.body;
  let user = await User.findOne({ _id: userId });
  if (user) {
    let project = await Project.findOne({ _id: projId });
    return res.json({
      success: true,
      message: "Project fetched successfully",
      project: project,
    });
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
};

export const updateProject = async(req,res) => {
  let { userId, htmlCode, cssCode, jsCode, projId } = req.body;
  let user = await User.findOne({ _id: userId });

  if (user) {
    let project = await Project.findOneAndUpdate(
      { _id: projId },
      { htmlCode: htmlCode, cssCode: cssCode, jsCode: jsCode },
      { new: true } // This option returns the updated document
    );

    if (project) {
      return res.json({ success: true, message: "Project updated successfully" });
    } else {
      return res.json({ success: false, message: "Project not found!" });
    }
  } else {
    return res.json({ success: false, message: "User not found!" });
  }
}
