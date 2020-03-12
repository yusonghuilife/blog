const jsonp = (url,data,cb,callbackName) => {
  // data combine
  let params = Object.keys(data).map(el => `${el}=${data[el]}`).join('&')
  // url combine
  url = url.indexOf('?') > -1 ? url + '&' + params : url + '?' + params
  // callback name combine
  url = '&' + `callback=${callbackName}`

  // create script element
  const script = document.createElement('script')
  script.src = url
  body.appendChild(script)

  // window callback function
  window[callbackName] = function (res) {
    cb(res)
    body.removeChild(script)
  }
}

