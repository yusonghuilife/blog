class AsyncCollection{
  constructor(){
    this.func = []
    this.count = 2
  }
  execute(){
    this.run()
    this.run()
  }
  run(){
    if ( this.count > 0 && this.func.length > 0 ) {
      this.count --
      let task = this.func.pop()()
      task.then(()=>{
        this.count ++
        this.run()
      })
    }
  }
  add(task) {
    this.func.push(...task)
  }
}

function request(queue,n) {
  const handler = () => {
    if(queue.length) {
      queue.unshift()
        .then(() => {
          handler();
        })
        .catch((e) => {
          throw new Error(e);
        })
    }
  }
  for (let i = 0; i < n; i++) {
    handler()
  }
}


// 每次只运行两个异步函数
let a = ()=>{ return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('task1')
    resolve()
  },1000)
})}
let b = ()=>{ return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('task2')
    resolve()

  },1000)
})}
let c = ()=>{ return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('task3')
    resolve()

  },1000)
})}


let colllection = new AsyncCollection()
colllection.add([a,b,c])
colllection.execute()
