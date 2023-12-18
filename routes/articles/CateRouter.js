var express = require('express');
var CateRouter = express.Router();

const {list,add} = require("../../controller/articles/CateController");

CateRouter.get('/my/cate/list',list)
CateRouter.post('/my/cate/add',add)

module.exports = CateRouter;
