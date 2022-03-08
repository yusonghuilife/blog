const debounce = (fn, time) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(function () {
      fn(...args)
    }, time || 500)
  }
}
