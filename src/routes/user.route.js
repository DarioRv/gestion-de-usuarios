const userCtrl = require("../controllers/user.controller");

const express = require("express");
const router = express.Router();

router.get("/", () => {
  userCtrl.getUsers;
});
router.post("/", () => {
  userCtrl.createUser;
});
router.get("/:id", () => {
  userCtrl.getUser;
});
router.put("/:id", () => {
  userCtrl.updateUser;
});
router.delete("/:id", () => {
  userCtrl.deleteUser;
});
router.use((req, res) => {
  res.status(404).send("404, Page not found");
});

module.exports = router;
