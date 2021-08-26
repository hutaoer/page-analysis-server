const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "myProject";
const dbUrl = `${url}/${dbName}`;
const client = new MongoClient(dbUrl);

const option = {
  reconnectTries: 3,
  auto_reconnect: true,
  poolSize: 40,
  connectTimeoutMS: 500,
  useNewUrlParser: true,
};

let p_db;

module.exports = async function init() {
  if (!p_db) {
    p_db = (await client.connect()).db(dbName);
    console.log("Connected successfully to server");
  }
  return p_db;
  // const db = client.db(dbName);
  // const collection = db.collection("docs");
  // const res = await collection.insertOne({ name: "hutaoer", age: 35 });
  // console.log(res);
  // return "done.";
};

// main()
//   .then()
//   .catch()
//   .finally(() => {
//     client.close();
//   });
