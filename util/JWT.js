const jsonwebtoken = require('jsonwebtoken')
const secret = 'wney'
const JWT = {
    generate(value,expires){
       return jsonwebtoken.sign(value,secret,{expiresIn: expires})
    },
    verify(token){
       return jsonwebtoken.verify(token,secret)
    }
}

module.exports = JWT
