// 方法1
function get(obj, path) {
  return path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
    .reduce((acc, el) => (acc || {})[el], obj)
}

const obj = {
  selector: { to: { toutiao: 'FE coder' } },
  target: [1, 2, { name: 'byted' }],
}

console.log(get(obj, 'selector.to.toutiao'))
console.log(get(obj, 'target[0]'))
console.log(get(obj, 'target[2].name'))

// 方法2

const mb = (pathArr) => (obj) =>
  pathArr.map((el) => (obj = (obj || {})[el])) && obj

const getHello = mb(['a', 'b', 0, 'hello'])
const getHelloLength = mb(['a', 'b', 0, 'hello', 'length'])

const obj1 = {
  a: {
    b: [{ hello: 'world' }],
  },
}

getHello(obj1) // world
getHelloLength(obj1) // 5
