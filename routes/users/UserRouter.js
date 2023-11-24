var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/users/UserController');

UserRouter.post("/users/login",UserController.login)

module.exports = UserRouter;
