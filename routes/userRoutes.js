const express = require("express");
const usersController = require("../controller/user");
const { createUsers, getUsers, getUser, deleteUser, updateUser } =
  usersController;
const routes = express.Router();
routes.get("/users", getUsers);
routes.get("/:id", getUser);
routes.delete("/:id", deleteUser);
routes.patch("/:id", updateUser);
routes.post("/", createUsers);
module.exports = routes;
