
const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://marcosjmm:Mj@4125@cluster0.hyovy.mongodb.net/<dbname>?retryWrites=true&w=majority";
const uri = "mongodb+srv://marcosjmm:Mj@4125@cluster0.hyovy.mongodb.net/grades?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(async (err) => {
  const collection = client.db("grades").collection("student");
  // fazer consulta
  const documents = await collection.find().toArray();
  console.log("Teste...")
  console.log(documents);

  const dbList = await client.db().admin().listDatabases();

  console.log("Databases");
  dbList.databases.forEach(db => {
    console.log(` - ${db.name}`)
  });

  client.close();
});
