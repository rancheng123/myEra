

import 'babel-polyfill';




import promise from 'es6-promise';
promise.polyfill();

import fetch from 'isomorphic-fetch';



class Utils{
    constructor(){
        this.momery = {
            from: {},
            to: {}
        }
    }

    requestData(opts){
        var that = this;
        var url = opts.url || null;
        var method = opts.method || 'post';
        var data = opts.data || {};
        var callback = opts.callback;
        var error = opts.error;
        var qpToken = opts.qpToken || that.Storage.get('user').token;

        if(method.toLowerCase() == 'get'){
            var arr = [];
            for(var key in data){
                var subStr = (key + '=' + data[key])
                arr.push(subStr)
            }

            var req = new Request(url+ '?' + arr.join('&'), {
                method: method,
                //不缓存响应的结果
                cache: 'reload'
            });
        }
        else if(method.toLowerCase() == 'post'){
            var req = new Request(url, {
                method: method,
                //不缓存响应的结果
                cache: 'reload',
                body: JSON.stringify(data),
                headers: { // headers: fetch事实标准中可以通过Header相关api进行设置
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    "qpToken": qpToken
                }
            });
        }

        fetch(req)
            .then(response => {
                // 处理状态码
                let status = response.status;
                switch (status){
                    case 502:
                        error[502]();
                        break;
                    case 404:
                        error[404]();
                        break;
                    default:
                        return response.json(); //此处必须有返回值，否则数据返回
                        break;
                }
            })
            .then(data => {

                if (!data)return false;
                if(data.resultCode == 0){
                    callback && callback(data);

                    //自定义错误捕捉器
                    // if(opts.errorAlert){

                    //     //默认未捕捉到
                    //     opts.errorAlert.jail = false;

                    //     opts.errorAlert(data);

                    //      捕捉到，中断 默认错误
                    //     //未捕捉到，执行 默认错误
                    //     if(opts.errorAlert.jail /*捕捉信号*/){
                    //         return;
                    //     }

                    // }
                }
                //报错处理
                else{





                    //自定义错误捕捉器
                    if(opts.errorAlert){

                        //默认未捕捉到
                        opts.errorAlert.jail = false;

                        opts.errorAlert(data);

                        //  捕捉到，中断 默认错误
                        //未捕捉到，执行 默认错误
                        if(opts.errorAlert.jail /*捕捉信号*/){
                            return;
                        }

                    }


                     if(data.resultCode == '20001'){
                        return;
                     }


                    //默认错误提示
                    Modal.alert('提示',data.resultMsg, [
                        { text: '取消', onPress: () => {} },
                        { text: '确定', onPress: () => {}, style: { fontWeight: 'bold' } },
                    ])
                }



            })
    };



    deepCopy(source) {
        var result={};
        for (var key in source) {
            result[key] = typeof source[key]==='object'? this.deepCopy(source[key]): source[key];
        }
        return result;
    }

    //切换路由
    switchRoute(routeStr){
        var that = this;


        switch (arguments.length){
            case 1:
                var routeStr = arguments[0];
                break;
            case 2:
                var arr = [];
                for(var name in arguments[1]){
                    arr.push(name+'='+arguments[1][name])
                }
                var routeStr = arguments[0] + '?' + arr.join('&');
                break;

        }

        that.momery.from = {
            path: location.pathname,
            params: that.Url.parseUrl(location.href).params
        }


        //定时器 等待软键盘落下
        setTimeout(function () {
            browserHistory.push(routeStr);

            that.momery.to = {
                path: location.pathname,
                params: that.Url.parseUrl(location.href).params
            };
        },500)

    }


};
window.Utils = new Utils();



class Storage {
    constructor(){
    };

    set(name,data){

        if(!this.isLocalStorageNameSupported()){
            alert('您的浏览器处于无痕浏览模式，此模式不支持本地存储，请关闭此模式，否则会影响您的正常使用');
            return false;
        };


        if(data.expire_custom){
            data.expireTime = Date.now() + data.expire_custom;
        }


        localStorage.setItem(name,JSON.stringify(data));
    }

    get(name){
        if(localStorage[name]){

            //若过期
            if(this.isExpire(name)){
                return '';
            }else{
                return JSON.parse(localStorage[name])
            }


        }else{
            return '';
        }
    }

    isExpire(name){
        var res = false;
        var obj = JSON.parse(localStorage[name]);


        if(obj.expire_custom){
            var nowTime = Date.now();
            if(nowTime>= obj.expireTime){
                localStorage[name] = null;
                delete localStorage[name];
                res = true;
            }
        }

        return res
    }

    isLocalStorageNameSupported(){
        var testKey = 'test', storage = window.localStorage;
        try {
            storage.setItem(testKey, '1');
            storage.removeItem(testKey);
            return true;
        } catch (error) {
            return false;
        }
    }

}
window.Utils.Storage = new Storage()

