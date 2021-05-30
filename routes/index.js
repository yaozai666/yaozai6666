var express = require('express');
const article = require('../middleware/article')
const category = require('../middleware/category')


//首页子应用
const indexApp = express()
indexApp.get('/',[article.getHot,article.getList,category.getList],(req,res) =>{
  let {hots,articles,categories} = req
  res.render('index',{hots:hots,articles:articles,categories:categories})
})

module.exports = indexApp;

