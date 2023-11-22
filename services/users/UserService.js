const UserModel = require("../../models/UserModel")

// 数据库查询
const UserService = {
    login:async({username,password})=>{
        return UserModel.find({
            username,
            password
        })
    }
}

module.exports = UserService
