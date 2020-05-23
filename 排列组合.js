let list = [
  ['热', '冷', '冰'],
  ['大', '中', '小'],
  ['重辣', '微辣'],
  ['重麻', '微麻'],
]

// 输出所有维度的组合，如 [['热', '冷''], ['大', '中']]  => 热+大，热+中，冷+大，冷+中

const compose = (list) => {
  let res = list.reduce((result, property) => {
    return property.reduce((acc, value) => {
      return acc.concat(result.map((ele) => [].concat(ele, value)))
    }, [])
  }, [])
  return res.map((arr) => arr.join('+'))
}
console.log(compose(list))
