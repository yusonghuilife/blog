// example 1
add(1); 	// 1
add(1)(2);  	// 3
add(1)(2)(3);  // 6
add(1)(2, 3);   // 6
add(1, 2)(3);   // 6
add(1, 2, 3);   // 6




function add(...arg1){
  let args = [...arg1]
  function fn(...arg2){
    args.push(...arg2)
    return fn //递归收取参数
  }

  fn.toString = function(){ console.log(args.reduce((a,b)=>a+b)) }
  return fn // 第一次返回
}



// example 2
const sum = (a, b, c) => {
  console.log(a + b + c)
}
const curriedSum = curry(sum);
curriedSum(1)(2)(3)

// const log = (a, b, c) => {
//     console.log(a, b, c);
// };
// const curriedLog = curry(log);
// curriedLog('a')('b')('c'); // a b c


function curry(fn){
  if (fn.length <= 1) return fn
  let args = []
  return function inner(arg1){
    args.push(arg1)
    return args.length === fn.length ? fn.call(this, ...args) : inner
  }
}


// let curryTest = curry( (a,b,c,d)=>{console.log(a+b+c+d)} )
// curryTest(1,2,3)(4) //返回10
// curryTest(1,2)(4)(3) //返回10
// curryTest(1,2)(3,4) //返回10

// function curry(fn){
//   let args = []
//   return function inner(...args1){
//     args.push(...args1)
//     return args.length === fn.length ? fn(...args) : inner
//   }
// }



