const mongoose = require('mongoose')
const Schema=mongoose.Schema

// user模型==>users集合

const UserType ={
    username:String,
    nickname:String,
    password:String,
    gender:Number,
    email:String,
    user_pic:String
}
const UserModel = mongoose.model("user",new Schema(UserType))

module.exports = UserModel
