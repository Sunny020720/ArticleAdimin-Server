const CateModel = require("../../models/CateModel")

// 数据库查询
const CateService = {
    list:async()=>{
        return CateModel.find();
    },
    add:async({cate_name,cate_alias})=>{
        return CateModel.create({cate_name, cate_alias})
    },
    info:async({cate_name,cate_alias,_id})=>{
        return CateModel.updateOne({
            _id
        },{
            cate_name,cate_alias
        })
    },
    del:async({_id})=>{
        return CateModel.deleteOne({_id})
    }
}

module.exports = CateService
