const Project=require('../models/Project');


//creating the projects
const createProject=async(req,res)=>{
    try{
        const newProject=await Project.create(req.body);
        res.status(201).json(
            {
                success: true,
                data: newProject
            }
        )
    }
    catch(error)
    {
        res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}

//get all the projects
const getAllProjects=async(req,res)=>{
    try{
        const projects=await Project.find();
        res.status(200).json(
            {
                success: true,
                data: projects
            }
        )
    }
    catch(error)
    {
        res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}

const getProjectById=async(req,res)=>{
    try{
        const project=await Project.findById(req.params.id);
        if(!project)
        {
            return res.status(404).json(
                {
                    success: true,
                    message: "Project not found"
                },
                res.status(200).json(
                    {
                        success: true,
                        data: project
                    }
                )
            )
        }
    }
    catch(error)
    {
        res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}
const deleteProject=async(req,res)=>{
    try{
        const project=await Project.findByIdAndDelete(req.params.id);

        if(!project)
        {
            return res.status(404).json(
                {
                    success: false,
                    message: "Project not found"
                },
            )
        }
        res.status(200).json(
            {
                success: true,
                message: "PROJECT DELETED SUCCESSFULLY"
            }
        )
    }
    catch(error)
    {
        res.status(500).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}
const updateProject=async(req,res)=>{
    try{
      const project=await Project.findByIdAndUpdate(req.params.id,
        req.body,
        {new: true,
            runValidators: true
        })
        if(!project)
        {
            return res.status(404).json(
                {
                    success: false,
                    message: "Project not found"
                }
            )
        }
        res.status(200).json(
            {
                success: true,
                data: project
            }
        )
    }
    catch(error)
    {
         res.status(500).json(
            {
                success: false,
                message: error.message
            }
         )
    }
}
module.exports={createProject, getAllProjects, getProjectById, deleteProject, updateProject};