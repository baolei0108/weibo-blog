const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

//引入数据库表users
const UserModel = require('../models/users')

router.get('/', function(req, res, next) {
    res.send('主页')

})


//用于处理用于提交完注册后的数据后，从数据库中读取数据
router.get('/:name', function(req, res, next) {
   //res.send('show')
   const name = req.params.name
   console.log("-------------" + name);

   Promise.all([
     UserModel.getUserByName(name), // 获取作者信息
     // CommentModel.getComments(postId), // 获取该文章所有留言
     //PostModel.incPv(postId)// pv 加 1
   ])
     .then(function (result) {
       const user = result[0]   //从数据库读取的结果
       //const comments = result[1]
       if (!user) {
         throw new Error('该作者不存在')
       }
 
       res.render('show', {
          user: user,  //传递参数user
         //comments: comments
       })
     })
     .catch(next)

})



module.exports = router
