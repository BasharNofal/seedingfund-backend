"use strict";

const express = require("express");
const router = express.Router();
const Projects = require("./models/projects-model");

const handleGetAllProjects = async (req, res) => {
	try {
		const projects = await Projects.find();
		res.json({ projects });
	} catch (error) {
		res.json({ response: error });
	}
};

const handleGetProjectsById = async (req, res) => {
	const _id = req.params.id;
	try {
		const projects = await Projects.find({ userId: _id });
        res.json([...projects])
	} catch (error) {
		res.json({
			response: `user with id: "${_id}" wasn't found`,
			error,
		});
	}
};

const handleAddProject = async (req, res) => {
	try {
		let project = new Projects(req.body);
		const projectRecord = await project.save();
		res.json({ data: projectRecord });
	} catch (error) {
		res.json({ response: error });
	}
};

const handleUpdateProjectState = async (req, res) => {
	try {
		let _id = req.params.id;
		const projectRecord = await Projects.findByIdAndUpdate(_id, req.body, {
			new: true,
		});
        console.log({projectRecord})
		res.json({ data: projectRecord });
	} catch (error) {
		res.json({ response: error });
	}
};

router.get("/getAll",  handleGetAllProjects);
router.get("/getAllById/:id", handleGetProjectsById);
router.put("/updateState/:id", handleUpdateProjectState);
router.post("/addProject", handleAddProject);

module.exports = router;