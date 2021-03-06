// 1. 一次并发n个任务
function request(queue, n) {
  let tasks = queue.slice()
  let res = []
  const handler = () => {
    if (tasks.length) {
      let task = tasks.shift()
      task()
        .then((e) => {
          // console.log(queue.indexOf(task))
          res[queue.indexOf(task)] = e
          console.log(res)
          if (res.length === queue.length) {
            return res
          } else {
            handler()
          }
        })
        .catch((e) => {
          throw new Error(e)
        })
    }
  }
  for (let i = 0; i < n; i++) {
    handler()
  }
}

let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('task1')
      resolve('task1')
    }, 5000)
  })
}
let b = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('task2')
      resolve('task2')
    }, 3000)
  })
}
let c = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('task3')
      resolve('task3')
    }, 2000)
  })
}

// console.log(request([a, b, c], 2))

async function mergePromise(ajaxUrlsArray) {
  // 并发读取远程URL
  const textPromises = ajaxUrlsArray.map(async (url) => {
    return await url()
  })
  // 按次序输出
  for (const textPromise of textPromises) {
    await textPromise
  }
}

mergePromise([a, b, c])

// // 2. 实现一个mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中
// const timeout = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, ms)
//   })

// const ajax1 = () =>
//   timeout(2000).then(() => {
//     console.log('1')
//     return 1
//   })

// const ajax2 = () =>
//   timeout(1000).then(() => {
//     console.log('2')
//     return 2
//   })

// const ajax3 = () =>
//   timeout(2000).then(() => {
//     console.log('3')
//     return 3
//   })

// mergePromise([ajax1, ajax2, ajax3]).then((data) => {
//   console.log('done')
//   console.log(data) // data 为 [1, 2, 3]
// })
// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]

// const mergePromise = (ajaxArray) => {
//   const data = []
//   let tmp = Promise.resolve()
//   ajaxArray.forEach((element) => {
//     tmp = tmp.then(element).then((res) => {
//       data.push(res)
//       return data
//     })
//   })
//   return tmp // tmp即为一个Promise.resolve(data),可调用then取出data数组
// }

// async function mergePromise(ajaxUrlsArray) {
//   // 并发读取远程URL
//   const textPromises = ajaxUrlsArray.map(async (url) => {
//     return (response = await fetch(url))
//   })
//   // 按次序输出
//   for (const textPromise of textPromises) {
//     console.log(await textPromise)
//   }
// }
// // 3.并发执行并按顺序返回
// const timeout = (i) => new Promise((resolve) => setTimeout(() => resolve(i), i))
// console.log(asyncPool(2, [1000, 5000, 3000, 2000], timeout))

// function asyncPool(poolLimit, array, iteratorFn) {
//   let i = 0
//   const ret = [] // 所有正在运行的promise
//   const executing = [] // max并发执行池

//   const enqueue = function () {
//     if (i === array.length) {
//       return Promise.resolve()
//     }
//     const item = array[i++]
//     const p = Promise.resolve().then(() => iteratorFn(item, array))
//     ret.push(p)
//     const e = p.then(() => executing.splice(executing.indexOf(e), 1))
//     executing.push(e)

//     let r = Promise.resolve()
//     if (executing.length >= poolLimit) {
//       r = Promise.race(executing)
//     }
//     return r.then(() => enqueue())
//   }
//   return enqueue().then(() => Promise.all(ret))
// }
