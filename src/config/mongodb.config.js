const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/crud";
mongoose
  .connect(URI)
  .then(() => {
    console.log("Conexión exitosa con la base de datos");
  })
  .catch((err) => {
    console.log("Error de conexión con la base de datos", err);
  });

module.exports = mongoose;
