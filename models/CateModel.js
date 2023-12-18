const mongoose = require('mongoose')
const Schema=mongoose.Schema

// Cate模型==>cates集合

const CateType ={
    cate_name:String,
    cate_alias:String,
}
const CateModel = mongoose.model("cate",new Schema(CateType))

module.exports = CateModel
