const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/holamundo", (req, res) => {
  // obtener contenido de hello.txt
  const content = fs.readFileSync("./hello.txt", "utf8");
  res.json({ content });
});

app.post("/holamundo", (req, res) => {
  const { body } = req;
  // Probar que se recibe el body
  res.json(body);
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
