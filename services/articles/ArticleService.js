const ArticleModel = require("../../models/ArticleModel")

// 数据库查询
const ArticleService = {
    // 条件查询，获得总条数total
    total:async({ state, cate_id})=>{
        if(state && cate_id){
            return ArticleModel.find({
                state,cate_id
            })
        }else if(state){
            return ArticleModel.find({
                state
            })
        }else if(cate_id){
            return ArticleModel.find({
                cate_id
            })
        }else {
            return ArticleModel.find({})
        }
    },
    // 分页条件查询
    list:async({ state, cate_id,pagesize,pagenum})=>{
        pagesize=Number(pagesize)
        pagenum=Number(pagenum)
        if(state && cate_id){
            return ArticleModel.find({
                state,cate_id
            }).skip((pagenum-1)*pagesize).limit(pagesize)
        }else if(state){
            return ArticleModel.find({
                state
            }).skip((pagenum-1)*pagesize).limit(pagesize)
        }else if(cate_id){
            return ArticleModel.find({
                cate_id
            }).skip((pagenum-1)*pagesize).limit(pagesize)
        }else {
            return ArticleModel.find({}).skip((pagenum-1)*pagesize).limit(pagesize)
        }
    },
    // 添加文章
    add:async({title,state, cate_id,cover_img,content})=>{
        return ArticleModel.create({title,state,cate_id,cover_img,content})
    },
    // info:async({cate_name,cate_alias,_id})=>{
    //     return CateModel.updateOne({
    //         _id
    //     },{
    //         cate_name,cate_alias
    //     })
    // },
    del:async({_id})=>{
        return ArticleModel.deleteOne({_id})
    }
}

module.exports = ArticleService
