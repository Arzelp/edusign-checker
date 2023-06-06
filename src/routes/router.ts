import express from 'express';
const studentsController = require('../controllers/studentsController')
const coursesController = require('../controllers/coursesController');
export const router = express.Router();

router.get('/students/all', studentsController.allStudents);
router.get('/courses/all', coursesController.allCourses);