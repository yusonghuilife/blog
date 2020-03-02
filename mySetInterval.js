function mySetInterval(func,time){
  mySetInterval.timer = setTimeout(()=>{
    func()
    mySetInterval(func,time)
  },time)
}

mySetInterval.clear = function(){
  clearTimeout(mySetInterval.timer)
}

mySetInterval(() => {
  console.log(11111)
}, 1000)

setTimeout(() => {
  // 5s 后清理
  mySetInterval.clear()
}, 5000)