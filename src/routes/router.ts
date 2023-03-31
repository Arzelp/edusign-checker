import express from 'express';
const edusignController = require('../controllers/coursesController')

export const router = express.Router();

router.get('/courses/all', edusignController.allCourses);
