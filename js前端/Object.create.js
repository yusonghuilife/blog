// polyfill Object.create()
Object.create = function (prototype) {
  const Cls = function () {};
  Cls.prototype = prototype;
  return new Cls();
};
/**
 * 1. 是否支持null参数
 * 2. 是否支持Object.create第二个参数
 */
