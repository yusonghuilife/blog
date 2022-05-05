const data = { name: 'kindeng' };
observe(data);
data.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --> dmq

function Dep () {
  this.subs = [];
}
Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notify: function () {
    this.subs.forEach(function (sub) {
      sub.update();
    });
  }
};

function observe (data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  // 取出所有属性遍历
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
}

function defineReactive (data, key, val) {
  const dep = new Dep();

  observe(val); // 监听子属性
  Object.defineProperty(data, key, {
    enumerable: true, // 可枚举
    configurable: false, // 不能再define
    get: function () {
      Dep.target && dep.addSub(Dep.target);

      return val;
    },
    set: function (newVal) {
      console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
      val = newVal;
      dep.notify(); // 通知所有订阅者
    }
  });
}

function Watcher (vm, exp, cb) {
  this.cb = cb;
  this.vm = vm;
  this.exp = exp;
  // 此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解
  this.value = this.get();
}
Watcher.prototype = {
  update: function () {
    this.run(); // 属性值变化收到通知
  },
  run: function () {
    const value = this.get(); // 取到最新值
    const oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal); // 执行Compile中绑定的回调，更新视图
    }
  },
  get: function () {
    Dep.target = this; // 将当前订阅者指向自己
    const value = this.vm[exp]; // 触发getter，添加自己到属性订阅器中
    Dep.target = null; // 添加完毕，重置
    return value;
  }
};
