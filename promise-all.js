Promise.all = function(arr){
  let res = []

  return new Promise((resolve,reject) => {
    arr.map(promise => {
      promise.then(
        value => {
          res.push(value)
          if (res.length === arr.length) resolve(res)
        },
        reason => reject(reason)
      )
    })
  })
  
}


// test

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('定时器1')
  }, 3000)
});

let promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('定时器2')
  }, 2000);
})

Promise.all([promise2, promise1]).then(res => {
  console.log(res)
})
