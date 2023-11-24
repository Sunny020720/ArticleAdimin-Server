const UserService = require("../../services/users/UserService");
const {generate} = require("../../util/JWT");

const UserController={
    login:async(req,res)=>{
        // req.body
        var result = await UserService.login(req.body)

        if(result.length === 0){
            res.send({
                code: -1,
                error:"用户名密码不匹配"
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
    }
}

module.exports = UserController
