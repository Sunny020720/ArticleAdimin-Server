const CateModel = require("../../models/CateModel")

// 数据库查询
const CateService = {
    list:async()=>{
        return CateModel.find();
    },
    add:async({cate_name,cate_alias})=>{
        return CateModel.create({cate_name, cate_alias})
    },
}

module.exports = CateService
