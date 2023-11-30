var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/users/UserController');
const multer =require('multer')
const {extname} = require("path");

// 为上传的文件添加后缀和文件名
const storage = multer.diskStorage({
    // cb是callback回调函数的缩写
    destination:(req,file,cb)=>{
        cb(null,'public/avatar_uploads/')
    },
    filename:(req,file,cb)=>{
        // 文件名取 时间戳和原文件的后缀名进行组合
        cb(null,Date.now()+extname(file.originalname))
    }
})
// 表示将上传的文件指定地址存放，若没有该文件，则创建文件夹
const upload = multer({
    // dest:'./uploadImg/'
    storage,
})

UserRouter.post("/users/login",UserController.login)
UserRouter.post("/users/register",UserController.register)
UserRouter.get("/users/userinfo",UserController.userinfo)
UserRouter.put("/users/userinfo",UserController.update)
UserRouter.patch("/users/update_pwd",UserController.update_pwd)
UserRouter.post("/users/update_avatar",upload.single('file'),UserController.update_avatar)

module.exports = UserRouter;
