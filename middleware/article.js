const Article = require('../model/article')


/**
 * 文章中间件
 */
module.exports = {
    /**
     * 获取热门文章
     */
    getHot: (req, res, next) => {
        Article.getHot(3).then(results => {
            req.hots = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取最新博文
     */
    getList: (req, res, next) => {
        Article.getList().then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定类目下的文章列表
     */
    getListByCategoryId: (req, res, next) => {
        //获取参数
        let id = req.params.id
        Article.getListByCategoryId(id).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定关键词的文章列表
     */
    getListBykeyword: (req, res, next) => {
        //表单
        let keyword = req.query.keyword
        Article.getListBykeyword(keyword).then(results => {
            req.articles = results
            next()
        }).catch(err => {
            next(err)
        })
    },
    /**
     * 获取指定文章的详情
     */
    getArticleById: (req, res, next) => {
        let {id} = req.params
        Article.getArticleById(id).then(results => {
            req.article = results
            next()
        }).catch(err => {
            next(err)
        })
    }
}