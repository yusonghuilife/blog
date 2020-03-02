Promise.prototype.finally = function (cb){
  // 需要拿到cb的返回值传给下一个then使用
  
  return this.then(
       value => Promise.resolve(cb(value)).then(() => value),
       reason => Promise.resolve(cb(reason)).then(() => {throw reason })
    )
  // return this.then(value => Promise.resolve(cb(value)).then(()=>value),reason => Promise.resolve(cb(reason)).then(()=>{throw reason}))
}


new Promise((resolve, reject) => {
  reject('good');
}).finally((res) => {
  console.log(res,"0")
}).then((res) => {
  console.log(res,"1");
}).finally(() => {
  console.log('finally2');
});
