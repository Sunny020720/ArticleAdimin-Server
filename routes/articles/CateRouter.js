var express = require('express');
var CateRouter = express.Router();

const {list,add,info,del} = require("../../controller/articles/CateController");

CateRouter.get('/my/cate/list',list)
CateRouter.post('/my/cate/add',add)
CateRouter.put('/my/cate/info', info)
CateRouter.delete('/my/cate/del', del)

module.exports = CateRouter;
