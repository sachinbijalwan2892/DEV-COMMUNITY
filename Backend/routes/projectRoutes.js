const express=require('express');

const router=express.Router();

const {createProject, getAllProjects, getProjectById,deleteProject, updateProject}=require('../controllers/projectController');

router.post('/', createProject); 
router.get('/:id', getProjectById)
router.get('/', getAllProjects);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject)
module.exports=router;