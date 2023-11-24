var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/users/UserController');

UserRouter.post("/users/login",UserController.login)
UserRouter.post("/users/register",UserController.register)

module.exports = UserRouter;
