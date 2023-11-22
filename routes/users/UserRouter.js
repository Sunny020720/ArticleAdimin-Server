var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/users/UserController');

// UserRouter.get('/wly/users/login', function(req, res, next) {
//   res.send('respond with a resource');
// });

UserRouter.post("/wly/users/login",UserController.login)

module.exports = UserRouter;
