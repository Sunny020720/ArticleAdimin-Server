const UserService = require("../../services/users/UserService");
const UserController={
    login:async(req,res)=>{
        // req.body
        var result = await UserService.login(req.body._value)
        // console.log(req.body._value)
        if(result.length === 0){
            res.send({
                code:"-1",
                error:"用户名密码不匹配"
            })
        }else{
            res.send({
                ActionType:"OK"
            })
        }
    }
}

module.exports = UserController
