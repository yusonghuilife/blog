const throttle = (fn, time) => {
  let canRun = true
  return (args) => {
    const self = this
    if (!canRun) return ''
    canRun = false
    setTimeout(function () {
      fn.apply(self,args)
      canRun = true
    },time || 500 )
  }
}


setInterval(throttle((name) => { console.log('throttle',name)},5000),100)
