import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

//Conectar ao Mongo DB com o mongoose
(async () => {
  try {
    await mongoose.connect("mongodb+srv://marcosjmm:Mj@4125@cluster0.hyovy.mongodb.net/grades?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log('Erro ao conectar no MongoDB')
  }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API iniciada'));