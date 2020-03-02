class myLocalStorage{
  constructor(){
    this.map = new Map()
  }
  setItem(key,value){
    this.map.set(key.toString(),value.toString())
  }
  getItem(key){
    if (!this.map.has(key.toString())) return null
    return this.map.get(key.toString())
  }
  deleteItem(key){
    this.map.delete(key.toString())
  }
  clear(){
    this.map.clear()
  }
}

Object.defineProperty(window,localStorage,{
  value: new myLocalStorage()
})