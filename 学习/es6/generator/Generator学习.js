// https://blog.csdn.net/kunshan_shenbin/article/details/40425143

Generator (生成器)  (ES6 新特性)

    作用:  解决 JavaScript 回调嵌套问题

          改变代码结构，以更可读的代码 解决工作流中的回调嵌套问题。





// 声明 Generator
function * eatDinner( value ) {

  // yield 关键字
      //将代码块 切割成不同的时间阶段
      //异步转同步

  // innerRes1 是第二次next传入的值，不是 value + 1 的结果值
  var innerRes1 = yield value + 1


  var innerRes2 = yield innerRes1 * 10


}


// 使用 Generator

  // 产生一个generator 实例 （处于悬挂状态，等待执行）
  // 此时不执行 foo函数
  var g = eatDinner(11 /*传入的value值，初始值*/);



  //第一次next不需要传值,开始执行eatDinner函数
  //g.next() 方法使代码执行到下一个 yield 的位置,  返回一个对象
  //返回第一个yield 的计算结果
  var outerRes1 = g.next();
  /*
    {
      // yield 关键字右侧表达式的值
      value: 10,

      // 检测生成器函数是否执行完成
      done: false
    }
  */


  var outerRes2 = g.next(outerRes1.value /*yield 的返回值*/)




// 应用实例

    // 当前的 Generator
    var activeGenerator;
    // 控制工具
    function gQueue(generatorFunc) {
      activeGenerator = generatorFunc(function (err, data) {
        if (err) {
          throw err;
        }
        // 前文中的 g.next()，并把回调函数的结果作为参数传递给 yield
        activeGenerator.next(data)
      });

      activeGenerator.next();
    }



    //  工作流
    function asyncFunc(cb) {
      // 这个函数模拟一个异步操作，将在 1 秒后触发回调函数
      setTimeout(function() {
        cb(null, 100);
      }, 1000)
    }

    // 声明一个 Generator 并传给 gQueue
    gQueue(function * flow(next) {

      console.log('start');

      // 执行异步函数 asyncFunc，并把 next 注册在其回调函数里
      var y = yield asyncFunc(next);

      // 回调执行完成后，会触发 g.next()，此时 y 的值为 asyncFunc 回调里的 100
      console.log('y is', y);

      // 同上
      var z = yield asyncFunc(next);

      console.log('z is ', z);
      console.log('end')
    });





