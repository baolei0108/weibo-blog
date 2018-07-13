# weibo-blog

该版本的博客应用主要完成的是：用户注册，将用户信息写入数据库，

注册完后直接跳到另一个页面，显示该用户的信息，从数据库读出用户信息
涉及到url带参数



lib里面的是mongo.js是创建数据库的操作，数据库名称参数在config的default.js里
models里面的是建立数据库表的操作，如User表

routes主要控制页面的跳转
sign.js里面，提交表单,并且在注册成功后，res.redirect(`/posts/${user.name}`) //使得提交的url带name这个参数跳转url，并传参数name
 
 
 posts.js 控制跳转后的url,并连接数据库进行处理
 //用于处理用于提交完注册后的数据后，从数据库中读取数据
router.get('/:name', function(req, res, next) {........})



运行该程序
PS F:\weibo-blog> supervisor index
打开浏览器：http://localhost:3002/signup 
