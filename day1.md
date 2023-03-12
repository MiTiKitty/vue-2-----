# 前端路由分析
+ 项目结构：上中下结构
    + 路由组件：
        + home： 首页路由
        + search： 搜索路由
        + login： 登录路由
        + register： 注册路由
    + 非路由组件：
        + Header： 头部组件
        + Footer： 底部组件【在登录页和注册页没有】

## 非路由组件的搭建
### Header组件
1. 完成静态页面的开发
> 使用 `npm i element-ui -S` 命令安装element-ui
2. 完成登录和注册的跳转

### Footer组件
1. 完成静态页面的开发
2. 不在登录和注册页面出现

### Home模块组件的拆分
1. 三级联动组件ListContainer & 今日推荐组件Recommend & 今日排行Rank组件 & 猜你喜欢Like组件 & 楼层Floor组件 & 品牌Brand组件
2. 完成ListContainer组件的静态页面开发
3. 完成Recommend组件的静态页面开发
4. 完成Rank组件的静态页面开发
5. 完成Like组件的静态页面开发
6. 完成Floor组件的静态页面开发
6. 完成Brand组件的静态页面开发

#### TypeNav组件 : 三级联动组件
1. 在Home、Search、Detail组件中都存在
2. 完成静态页面的开发
3. 注册为全局组件

## 路由组件的搭建
### 配置路由
1. 使用`npm install vue-router@3.5.2 --save` 命令安装vue-router
2. 创建router.js文件，完成路由配置
3. 搭建pages目录，创建home、search、login、register路由文件
4. 配置路由元信息：Footer组件的显示与隐藏
> 注意，对象写法中，params只能配合name属性使用，配合path属性使用无效，params需要在router.js中占位(:值)
5. 解决编程式导航多次跳转同一个路由报错的问题，
> (在编程式导航中传递成功和失败的回调函数) (治标不治本)

## axios封装
1. 请求拦截器

2. 响应拦截器

3. 接口统一管理
    项目小：完全可以在组件的生命周期函数中发请求
    项目大：统一接口管理
4. 解决跨域问题
    在vue.config.js里进行配置