var express = require('express');
var ArticleRouter = express.Router();

const {list} = require("../../controller/articles/ArticleController");

ArticleRouter.get('/my/article/list',list)
module.exports = ArticleRouter
