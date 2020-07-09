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

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  subject: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true
  },
  lastModified: {
    type: Date,
    default: Date.now()
  }
});

//definindo o modelo da coleção
mongoose.model('student', studentSchema, 'student');

const student = mongoose.model('student');

new student({
  name: "Mais um Paulo Assis",
  subject: "Matemática",
  value: 22
}).save().then(() => console.log('Documento inserido.')).catch(err => console.log('Falha ao inserir student'));
