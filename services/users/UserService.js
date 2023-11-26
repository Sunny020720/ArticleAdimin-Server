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
    },
    userinfo:async({_id})=>{
        return UserModel.find({
            _id
        })
    },
    update:async({nickname,email, _id})=>{
        return UserModel.updateOne({
            _id
        },{
            nickname,email
        })
    },
    // 校验原密码是否正确
    CheckOldPsw:async({_id,old_pwd})=>{
        let password=old_pwd
        return UserModel.find({_id,password})
    },
    updatepwd:async({ new_pwd,_id})=>{
        let password=new_pwd
        return UserModel.updateOne({
            _id
        },{
            password
        })
    }
}

module.exports = UserService
