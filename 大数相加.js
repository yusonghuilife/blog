function BigIntAdd(a,b) {
  a = a.split('')
  b = b.split('')
  let length = Math.max(a.length,b.length)
  let res = []
  let inc = 0
  for (let i = 0; i < length; i++) {
    let num1 = a.length !== 0 ? parseInt(a.pop()) : 0
    let num2 = b.length !== 0 ? parseInt(b.pop()) : 0
    if (num1 + num2 > 9) {
      res.unshift((num1+num2+inc) % 10)
      inc = Math.floor((num1+num2+inc)/10)
    } else {
      res.unshift(num1 + num2)
      inc = 0
    }
  }

  return res.join('')
}

var a = "9999999999999";
var b = "1245612312312421321";
console.log(BigIntAdd(a,b))