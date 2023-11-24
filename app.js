var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./config/db.config')

var app = express();

// 跨域问题解决
const cors=require('cors')
app.use(cors())

// 路由
var indexRouter = require('./routes/index');

var UserRouter = require('./routes/users/UserRouter');
const {verify, generate} = require("./util/JWT");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// token校验
app.use((req,res,next)=>{
//   如果token有效，next()
//   如果token过期，返回401错误
  if(req.url==='/users/login'){//登录不需要token
    next()
    return
  }
  const token = req.headers['authorization'].split(' ')[1]
  if(token){
    const payload=verify(token)
    if(payload){
      const newToken = generate({
        _id:payload._id,
        username:payload.username
      },'6000s')
      res.header('Authorization',newToken)
      next()
    }else {
      res.status(401).send({code:-1,message:'token过期'})
    }
  }
})

// 路由
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use(UserRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
