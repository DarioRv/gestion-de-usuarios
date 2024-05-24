const { isValidObjectId } = require("mongoose");

const User = require("../models/user.model");
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.json({
      status: "201",
      message: "Usuario creado exitosamente",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: "Error al crear el usuario",
      data: err,
    });
  }
};

userCtrl.getUser = async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({
      status: "400",
      message: "El ID no es válido",
    });
  }

  try {
    const user = await User.findById(req.params.id);
    res.json({
      status: "200",
      message: "Usuario encontrado",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: "Internal server error",
      data: err,
    });
  }
};

userCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({
      status: "400",
      message: "El ID no es válido",
    });
  }

  const user = req.body;
  try {
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({
      status: "200",
      message: "Usuario actualizado",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: "Internal server error",
      data: err,
    });
  }
};

userCtrl.deleteUser = async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({
      status: "400",
      message: "El ID no es válido",
    });
  }

  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      status: "200",
      message: "Usuario eliminado",
    });
  } catch (err) {
    res.status(500).json({
      status: "500",
      message: "Internal server error",
      data: err,
    });
  }
};

module.exports = userCtrl;
