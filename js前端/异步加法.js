/*
  请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法

  add 函数已实现，模拟异步请求后端返回一个相加后的值
*/
function add (a, b) {
  return Promise.resolve(a + b);
}

// 串行
async function sum (arr) {
  let sum = 0;
  for (const num of arr) {
    sum = await add(sum, num);
  }
  return sum;
}
// 串行reduce reduce本身不会等待执行每个promise
function sum1 (arr) {
  let sum = 0;
  arr.forEach(num => {
    sum = Promise.resolve(sum).then(n => add(n, num));
  });
  return sum;
}

// 并行
const sum2 = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr;
  const promiseArr = arr.reduce((acc, cur, index) => {
    if (index % 2 === 0) {
      acc.push(arr.slice(index, index + 2));
    }
    return acc;
  }, [])
    .map(chunk =>
      chunk.length === 2 ? add(...chunk) : Promise.resolve(chunk[0])
    );
  return Promise.all(promiseArr).then(sum2); // 再次递归
};

// 并行控制并发， 上面的Promise.all换成自己的并发promise
Promise.allWithLimit = function (promises, limit) {
  return new Promise((resolve, reject) => {
    let currentExecuteIdx = 0;
    const res = [];
    const promiseArr = Array.from(promises);
    const next = () => {
      Promise.resolve(promiseArr[currentExecuteIdx]).then(res => {
        res[currentExecuteIdx] = res;
      }, e => {
        res[currentExecuteIdx] = e;
      }).finally(() => {
        currentExecuteIdx++;
        if (currentExecuteIdx === promiseArr.length) {
          resolve(res);
        }
        if (currentExecuteIdx < promiseArr.length) {
          next();
        }
      });
    };
    for (let i = 0; i < limit; i++) {
      next();
    }
  });
};
