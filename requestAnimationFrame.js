;(function () {
  let lastCall = 0
  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (cb) {
      let current = new Date().getTime()
      let timeToCall = Math.max(0, 16.7 - (current - lastCall))
      let id = setTimeout(cb, timeToCall)
      lastCall = current + timeToCall
      return id
    }

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
})()
