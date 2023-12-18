const CateModel = require("../../models/CateModel")

// 数据库查询
const CateService = {
    list:async()=>{
        return CateModel.find()
    },
}

module.exports = CateService
