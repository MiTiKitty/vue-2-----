# 前端项目-尚品汇
## vue2项目——SHP

# day 1
## 前端路由分析
+ 项目结构：上中下结构
    + 路由组件：
        + home： 首页路由
        + search： 搜索路由
        + login： 登录路由
        + register： 注册路由
    + 非路由组件：
        + Header： 头部组件
        + Footer： 底部组件【在登录页和注册页没有】

# 开发
## 非路由组件的搭建
### Header组件
1. 完成静态页面的开发
> 使用 `npm i element-ui -S` 命令安装element-ui
2. 完成登录和注册的跳转

### Footer组件
1. 完成静态页面的开发
2. 不在登录和注册页面出现

## 路由组件的搭建
### 配置路由
1. 使用`npm install vue-router@3.5.2 --save` 命令安装vue-router
2. 创建router.js文件，完成路由配置
3. 搭建pages目录，创建home、search、login、register路由文件
4. 配置路由元信息：Footer组件的显示与隐藏
> 注意，对象写法中，params只能配合name属性使用，配合path属性使用无效，params需要在router.js中占位(:值)
5. 解决编程式导航多次跳转同一个路由报错的问题，
> (在编程式导航中传递成功和失败的回调函数) (治标不治本)
>> ()
