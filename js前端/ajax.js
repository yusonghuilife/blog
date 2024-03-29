/* eslint-disable no-mixed-operators */
function ajax (options) {
  // 请求地址
  let url = options.url;
  // 请求方法
  const method = options.method.toLocaleLowerCase() || 'get';
  // 默认为异步true
  const async = options.async;
  // 请求参数
  const data = options.data;
  // 实例化
  const xhr = new XMLHttpRequest();
  // 请求超时
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout;
  }
  // 返回一个Promise实例
  const res = new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject(new Error('请求超时'));
    // 监听状态变化回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 200-300 之间表示请求成功，304资源未变，取缓存
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve && resolve(xhr.responseText);
        } else {
          reject?.();
        }
      }
    };
    // 错误回调
    xhr.onerror = err => reject && reject(err);
    const paramArr = [];
    let encodeData;
    // 处理请求参数
    if (data instanceof Object) {
      for (const key in data) {
        // 参数拼接需要通过 encodeURIComponent 进行编码
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
      encodeData = paramArr.join('&');
    }
    // get请求拼接参数
    if (method === 'get') {
      // 检测url中是否已存在 ? 及其位置
      const index = url.indexOf('?');
      if (index === -1) url += '?';
      else if (index !== url.length - 1) url += '&';
      // 拼接url
      url += encodeData;
    }
    // 初始化
    xhr.open(method, url, async);
    // 发送请求
    if (method === 'get') xhr.send(null);
    else {
      // post 方式需要设置请求头
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
      xhr.send(encodeData);
    }
  });

  return res;
}
