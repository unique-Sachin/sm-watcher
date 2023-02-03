import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.write("hiiii");
  res.write("sachin Mishra");
  res.send();
});
app.listen(8080);
