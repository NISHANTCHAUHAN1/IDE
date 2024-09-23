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

export const getProject = async (req, res) => {
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


export const deleteProject = async(req,res) => {
    let {userId, progId} = req.body;
    let user = await User.findOne({ _id: userId });
    if (user) {
      let project = await Project.findOneAndDelete({ _id: progId });
      return res.json({ success: true, message: "Project deleted successfully" });
    }
    else {
      return res.json({ success: false, message: "User not found!" });
    }
}