var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/users/UserController');

UserRouter.post("/users/login",UserController.login)
UserRouter.post("/users/register",UserController.register)
UserRouter.get("/users/userinfo",UserController.userinfo)
UserRouter.put("/users/userinfo",UserController.update)
UserRouter.patch("/users/updatepwd",UserController.updatepwd)

module.exports = UserRouter;
