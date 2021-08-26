const express = require("express");
const init = require("../test/");
const app = express();
app.get("/home", async function (req, res) {
  // const db = await init();
  // const collection = db.collection("docs");
  // const res = await collection.insertOne({ name: "linxiaohong", age: 35 });
  res.send("ok");
});
app.get("/list", async function (req, res) {
  const db = await init();
  // console.log(db);
  const collection = db.collection("docs");
  const data = await collection.find({}).toArray();
  console.log(data);
  res.end("query done");
});
app.listen(3000, async function () {
  await init();
});
