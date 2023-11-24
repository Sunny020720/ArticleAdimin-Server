const UserModel = require("../../models/UserModel")

// 数据库查询
const UserService = {
    login:async({username,password})=>{
        return UserModel.find({
            username,
            password
        })
    },
    register:async({username,password})=>{
        const result = await UserModel.find({
            username
        })
        // 用户名未被占用 创建用户
        if(result.length===0){
            await UserModel.create({username, password})
        }
        return result
    }
}

module.exports = UserService
