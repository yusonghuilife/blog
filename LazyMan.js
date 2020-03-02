class LazyMan{
  constructor(name){
    this.firstTime = 0
    this.nowtime = 0 
    this.taskList = []
    console.log(`Hi I am ${name}`)  
    setTimeout(()=>{
     this.next()
    },0)
  }


  sleep(time) {
    let _this = this
    // console.log(this.duration)
    this.taskList.push(()=>{
      setTimeout(()=>{
        console.log(`等待了${time}秒...`)
        this.next()
      },time * 1000)
    })
    return this
  }

  eat(food){
    let _this = this
    this.taskList.push(()=>{
      console.log(`I am eating ${food}`)
      _this.next()
    })
    return this
  }

  sleepFirst(time){
    let _this = this
    this.firstTime += time
    this.taskList.unshift(()=>{
      setTimeout(()=>{
        console.log(`等待了${time}秒...`)
        _this.next()
      },time * 1000)
    })
    return this
  }
  next(){
    let fn = this.taskList.shift()
    fn && fn()
  }

}




new LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(1).sleep(5).eat('junk food');