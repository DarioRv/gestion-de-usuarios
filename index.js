const express = require("express");
const cors = require("cors");
const { mongoose } = require("./src/config/mongodb.config");
const userRouter = require("./src/routes/user.route");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Bienvenido a mi primer RESTful API");
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: http://localhost:" + port);
});
