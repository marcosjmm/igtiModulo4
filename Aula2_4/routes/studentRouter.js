import express from 'express';
import { studentModel } from '../models/student.js';

const app = express();

app.get('/student', async (req, res) => {
  try {
    const students = await studentModel.find({});
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { app as studentRouter };