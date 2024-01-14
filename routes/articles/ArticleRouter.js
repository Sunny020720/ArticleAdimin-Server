var express = require('express');
var ArticleRouter = express.Router();

const {list,del} = require("../../controller/articles/ArticleController");

ArticleRouter.get('/my/article/list',list)
ArticleRouter.delete('/my/article/info',del)

module.exports = ArticleRouter
