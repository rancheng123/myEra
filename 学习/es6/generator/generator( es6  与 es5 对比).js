// es6 写法

debugger
function * eatDinner( next ) {

  console.log('eat apple')

  var res = yield (function () {
    setTimeout(function() {
      debugger
      next(null, 100);
    }, 1000)
  })();

  debugger
  console.log('eat cupcake')

  var res = yield (function () {
    setTimeout(function() {
      debugger
      next(null, 100);
    }, 1000)
  })();


  console.log('eat waffle')

  debugger

}

var g = eatDinner(function (err, data) {
  if (err) {
    throw err;
  }
  // 前文中的 g.next()，并把回调函数的结果作为参数传递给 yield
  g.next(data)
});

g.next()







// es5

function eatDinner(){

  console.log('eat apple')

  setTimeout(function () {
    console.log('eat cupcake')


    setTimeout(function () {
      console.log('eat waffle')
    },1000)


  },1000)





}


eatDinner()



























