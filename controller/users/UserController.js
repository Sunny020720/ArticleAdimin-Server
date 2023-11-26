const UserService = require("../../services/users/UserService");
const {generate, verify} = require("../../util/JWT");

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
    },
    // 3.获取用户信息
    userinfo:async(req,res)=>{
        // 从token获取用户id
        const token = req.headers['authorization'].split(' ')[1]
        const payload=verify(token)
        // req.body
        var result = await UserService.userinfo({_id:payload._id})
        if(result.length === 0){
            res.send({
                code: -1,
                message:"找不到该用户"
            })
        }else{
            res.send({
                code: 0,
                message:'获取用户信息成功！',
                data:result[0],
                ActionType:"OK"
            })
        }
    },
    // 4.更新用户信息
    update:async(req,res)=>{
        // req.body
        var result = await UserService.update(req.body)
        if(result.length === 0){
            res.send({
                code: -1,
                message:"找不到该用户"
            })
        }else{
            res.send({
                code: 0,
                message:'更新用户信息成功！',
                ActionType:"OK"
            })
        }
    },
    // 6.更新密码
    updatepwd:async(req,res)=>{
        // 从token获取用户id
        const token = req.headers['authorization'].split(' ')[1]
        const payload=verify(token)
        // req.body
        let result0=await UserService.CheckOldPsw({...req.body,_id:payload._id})
        if(result0.length===0){
            res.send({
                code: -1,
                message:"原密码输入错误"
            })
        }else
        {
            var result = await UserService.updatepwd({...req.body,_id:payload._id})
            if(result.OK === 0) {
                res.send({
                    code: -2,
                    message:"密码修改失败"
                })
            }else{
                res.send({
                    code: 0,
                    message:'密码修改成功！',
                    ActionType:"OK"
                })
            }
        }
    }
}

module.exports = UserController
