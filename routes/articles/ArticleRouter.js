var express = require('express');
var ArticleRouter = express.Router();

const {list,del,add} = require("../../controller/articles/ArticleController");

ArticleRouter.get('/my/article/list',list)
ArticleRouter.delete('/my/article/info',del)
ArticleRouter.post('/my/article/add',add)
module.exports = ArticleRouter
