import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.write("hiiii");
  res.write("sachin Mishra \n");
  res.write("Hanumat Sharan ");
  res.send();
});
app.listen(8080);
