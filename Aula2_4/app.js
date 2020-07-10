import express from 'express';
import { studentRouter } from './routes/studentRouter.js';
import mongoose from 'mongoose';

const app = express();

require('dotenv').config();
console.log(process.env.USERDB);

//Conectar ao Mongo DB com o mongoose
(async () => {
  try {
    await mongoose.connect("mongodb+srv://"
      + process.env.USERDB + ":" + process.env.PWDDB + "Mj@4125@cluster0.hyovy.mongodb.net/grades?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log('Erro ao conectar no MongoDB')
  }
})();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API iniciada'));