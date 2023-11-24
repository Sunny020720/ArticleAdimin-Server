const mongoose = require('mongoose')
const UserModel = require("../models/UserModel");

mongoose.connect('mongodb://localhost:27017/article-manage', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// 一旦连接到 MongoDB，就可以创建用户模型并使用它将用户保存到数据库中。
//
// UserModel.create({
//     username:'jack',
//     nickname:'null',
//     password:'123456',
//     gender:0,
//     email:'1234567890@qq.com',
//     user_pic:'null' })
