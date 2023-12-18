var express = require('express');
var CateRouter = express.Router();

const {list} = require("../../controller/articles/CateController");

CateRouter.get('/my/cate/list',list)

module.exports = CateRouter;
