const mongoose = require('mongoose')
const Schema=mongoose.Schema

// Article模型==>articles集合

const ArticleType ={
    title:String,
    pub_date:String,
    state:String,
    cate_name:String, //分类名应该用cate_id找
//     详情
    content:String,
    cover_img:String,
    cate_id:String,
    author_id:String,
    username:String,
    nickname:String, // 应该用author_id找
}
const ArticleModel = mongoose.model("article",new Schema(ArticleType))

module.exports = ArticleModel
