const PENDING = 'pending';
const RESOLVE = 'resolve';
const REJECT = 'reject';

function MyPromise (execute) {
  const _this = this;
  this.status = PENDING;
  this.onResolveCallBack = [];
  this.onRejectCallBack = [];

  function resolve (data) {
    if (_this.status === PENDING) {
      _this.status = RESOLVE;
      _this.data = data;
      _this.onResolveCallBack.forEach(func => {
        func();
      });
    }
  }

  function reject (reason) {
    if (_this.status === PENDING) {
      _this.status = REJECT;
      _this.reason = reason;
      _this.onRejectCallBack.forEach(func => {
        func();
      });
    }
  }

  try {
    execute(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function'
    ? onFulfilled
    : function (value) {
      return value;
    };
  onRejected = typeof onRejected === 'function'
    ? onRejected
    : function (err) {
      throw err;
    };

  let promise2;
  if (this.status === RESOLVE) {
    promise2 = new MyPromise((resolve, reject) => {
      setTimeout(function () {
        try {
          const x = onFulfilled(this.data);
          // 特殊情况检测
          resolvePromise(promise2, x, resolve, reject); // 返回是promise处理
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (this.status === REJECT) {
    promise2 = new MyPromise((resolve, reject) => {
      setTimeout(function () {
        try {
          const x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  if (this.status === PENDING) {
    promise2 = new MyPromise((resolve, reject) => {
      setTimeout(function () {
        this.onResolveCallBack.push(() => {
          try {
            const x = onFulfilled(this.data);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });

        this.onRejectCallBack.push(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      });
    });
  }
  return promise2;
};

function resolvePromise (promise2, x, resolve, reject) {
  // 接受四个参数，新Promise、返回值，成功和失败的回调
  // 有可能这里返回的x是别人的promise
  if (promise2 === x) { // 这里应该报一个类型错误，来解决问题4
    return reject(new TypeError('循环引用了'));
  }
  // 看x是不是一个promise,promise应该是一个对象
  let called; // 表示是否调用过成功或者失败，用来解决问题7

  // 下面判断上一次then返回的是普通值还是函数，来解决问题1、2
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 可能是promise {},看这个对象中是否有then方法，如果有then我就认为他是promise了
    try {
      const then = x.then;// 保存一下x的then方法
      if (typeof then === 'function') {
        // 成功
        // 这里的y也是官方规范，如果还是promise，可以当下一次的x使用
        // 用call方法修改指针为x，否则this指向window
        then.call(x, (y) => {
          if (called) return; // 如果调用过就return掉
          called = true;
          // y可能还是一个promise，在去解析直到返回的是一个普通值
          resolvePromise(promise2, y, resolve, reject);// 递归调用，解决了问题6
        }, (err) => { // 失败
          if (called) return;
          called = true;
          reject(err);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else { // 说明是一个普通值
    resolve(x); // 表示成功了
  }
}

export default MyPromise;
