var _config = {
    blog_name       : '月度读书小组',         // 博客名称
	    owner       : 'BETH-zhang',           // github 用户名
	    repo        : 'yuedu',// github 中对应项目名
    duoshuo_id      : 'qiuge',            // 在第三方评论插件多说申请站点的子域名
    access_token    : '0fc969540f89e541be456'+'b4adec57b1e1e12a335',       // 请求量大时需要在 github 后台单独设置一个读取公开库的 token, 注意将token 拆成两个字符串，否则会被系统自动删除掉
    per_page        : '15',                    // 默认一页显示几篇文章
    issuesRepo: [{
    	id          : 0,
	    owner       : 'BETH-zhang',           // github 用户名
	    repo        : 'yuedu',// github 中对应项目名
    }, {
    	id          : 1,
	    owner       : 'lifesinger',           // github 用户名
	    repo        : 'lifesinger.github.com',// github 中对应项目名
    }]
}

var duoshuoQuery = {short_name:_config['duoshuo_id']};