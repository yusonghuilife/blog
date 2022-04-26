const jsonp = (url, data, cb, callbackName) => {
  // data combine
  const params = Object.keys(data).map(el => `${el}=${data[el]}`).join('&');
  // url combine
  url = url.indexOf('?') > -1 ? url + '&' + params : url + '?' + params;
  // callback name combine
  url = '&' + `callback=${callbackName}`;

  // create script element
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);

  // window callback function
  window[callbackName] = function (res) {
    cb(res);
    document.body.removeChild(script);
  };
};
