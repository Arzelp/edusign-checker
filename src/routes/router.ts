import express from 'express';
const studentsController = require('../controllers/studentsController')

export const router = express.Router();

router.get('/students/all', studentsController.allStudents);
