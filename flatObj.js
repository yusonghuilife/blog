var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

// 要求转换成如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

function flatObj(obj, parentKeyname, output = {}) {
  for (key in obj) {
    let keyname = `${parentKeyname}${key}`
    if (typeof obj[key] === 'object') {
      flatObj(obj[key], keyname + '.', output)
    } else {
      output[keyname] = obj[key]
    }
  }
  return output
}

//   var outputObj = {}
//   console.log(flatObj(entry,'',outputObj))

var entry1 = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'

}

function strength(entry) {
  let res = {}
  for (const element in entry) {
    let arr = element.split('.')
    let temp
    if (!res[arr[0]]) res[arr[0]] = Object.create(null)
    temp = res[arr[0]]
    for (let i = 1; i < arr.length; i++) {
      if (!temp[arr[i]]) temp[arr[i]] = i !== arr.length - 1 ? Object.create(null) : entry[element]
      temp = temp[arr[i]]
    }
  }
  return res
}

console.log(strength(entry1))
