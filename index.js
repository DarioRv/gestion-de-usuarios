const express = require("express");
const { mongoose } = require("./src/config/mongodb.config");
const userRoutes = require("./src/routes/user.route");
const port = process.env.PORT || 3000;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a mi primer RESTful API");
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: http://localhost:" + port);
});
