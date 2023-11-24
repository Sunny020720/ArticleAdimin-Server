const UserService = require("../../services/users/UserService");
const {generate} = require("../../util/JWT");

const UserController={
    // 1.登录
    login:async(req,res)=>{
        // req.body
        var result = await UserService.login(req.body)

        if(result.length === 0){
            res.send({
                code: -1,
                message:"用户名密码不匹配"
            })
        }else{
            const token = generate({
                _id:result[0]._id,
                username:result[0].username
            },'6000s')
            res.send({
                code: 0,
                token:token,
                message:'登陆成功！',
                ActionType:"OK"
            })
        }
    },
    // 2.注册
    register:async(req,res)=>{
        // req.body
        var result = await UserService.register(req.body)
        // console.log('len:',result.length)
        if(result.length > 0){
            res.send({
                code: -1,
                message:"用户名已被占用"
            })
        }else{
            res.send({
                code: 0,
                message:'注册成功！',
                ActionType:"OK"
            })
        }
    }
}

module.exports = UserController
