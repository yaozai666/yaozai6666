var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//创建主应用
var app = express();

// view engine setup 设置静态文件目录，用ejs对html进行渲染
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',require('ejs').renderFile)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//静态资源的配置
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//调用文章子应用
app.use('/article',require('./routes/article'))
//调用搜索子应用
app.use('/search',require('./routes/search'))

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
  console.log("错误"+err);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
