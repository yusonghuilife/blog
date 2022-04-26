// fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0'];
// 递归法
const fn = (matrix) => {
  const res = [];
  const dfs = (tmpArr, cur) => {
    if (tmpArr.length === matrix.length) {
      res.push(tmpArr.join(''));
      return;
    }
    for (let i = 0; i < matrix[cur].length; i++) {
      const item = matrix[cur][i];
      tmpArr.push(item);
      dfs(tmpArr, cur + 1);
      tmpArr.pop();
    }
  };
  dfs([], 0);
  return res;
};

// 循环法
const fn1 = (matrix) => {
  let preItems = [];
  for (let i = 0; i < matrix.length; i++) {
    const curItems = matrix[i];
    if (preItems.length === 0) {
      preItems = curItems;
      continue;
    }
    const newPreItems = [];
    for (let j = 0; j < curItems.length; j++) {
      const curItem = curItems[j];
      for (let k = 0; k < preItems.length; k++) {
        newPreItems.push(`${preItems[k]}${curItem}`);
      }
    }
    preItems = newPreItems;
  }
  return preItems;
};
console.log(fn([['a', 'b'], ['n', 'm'], ['0', '1']]));
