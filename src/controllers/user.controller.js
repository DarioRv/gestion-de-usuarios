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
  const user = await User.findById(req.params.id);
  res.json({
    status: "200",
    message: "Usuario encontrado",
    data: user,
  });
};

userCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({
      status: "200",
      message: "Usuario actualizado",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: "Error al actualizar el usuario",
      data: err,
    });
  }
};

userCtrl.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({
      status: "200",
      message: "Usuario eliminado",
    });
  } catch (err) {
    res.status(400).json({
      status: "400",
      message: "Error al eliminar el usuario",
      data: err,
    });
  }
};
