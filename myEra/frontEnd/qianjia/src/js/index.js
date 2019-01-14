require('../scss/base/base.scss');
require('../scss/base/common.scss');
require('../scss/font.scss');
require('../scss/base/commonModule.scss');

require('../scss/icon/icon.scss');
require('../scss/button/button.scss');

require('./enable')

//  https://www.iviewui.com/
import 'iview/dist/styles/iview.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


// 引入elementUI
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);




const requireComponent = require.context(
    // 其组件目录的相对路径
    './baseComponents',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {

    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 全局注册组件
    Vue.component(
        componentConfig.default.name,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
    )
})




import {} from './asset/config';
import {} from './asset/componentStore';
import {} from './asset/utils';




const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: '主页'
            },
            redirect: '/home',
            component: resolve => { require(['./page/home/home.vue'], resolve); }

        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '主页'
            },
            component: resolve => {
                require(['./page/home/home.vue'], resolve);
            }
        }
        // {
        //     path: '/login',
        //     name: 'login',
        //     meta: {
        //         title: '登陆'
        //     },
        //     component: resolve => {
        //         require(['./page/login.vue'], resolve);
        //     }
        // },
        // {
        //     path: '/module1',
        //     name: 'module1',
        //     meta: {
        //         title: '登陆'
        //     },
        //     component: resolve => { require(['./page/module1/module1.vue'], resolve); }
        // }
    ]
})


import App from './App'
new Vue({
  el: '#app',
  render: h => h(App),
    router
})
