var express = require('express');
var CateRouter = express.Router();

const {list,add,info} = require("../../controller/articles/CateController");

CateRouter.get('/my/cate/list',list)
CateRouter.post('/my/cate/add',add)
CateRouter.put('/my/cate/info', info)
module.exports = CateRouter;
