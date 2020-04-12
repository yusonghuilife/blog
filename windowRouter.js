export class Router{
  constructor(){
    this.routes = {}
    this.currentHash = window.location.hash
    window.addEventListener('hashchange',this.refreshPage)
  }

  addHash(hash, cb){
    this.routes[hash] = cb || function(){}
  }

  refreshPage(){
    let hash = window.location.hash.slice(1) || '/'
    this.routers[hash] && this.routes[hash]()
  }

}
