// [1,[2,3],[[4],[4,[4,5]]]].unique() -> [1,2,3,4,5]
const flatArr = (arr) => {
  return arr.reduce(
    (acc, cur) =>
      Array.isArray(cur) ? acc.concat(flatArr(cur)) : acc.concat(cur),
    []
  );
};

// [’NaN’,’NaN’,{a:1},’{a:1}’]

const isSame = (a, b) => {
  // +0 -0
  if (a === b) {
    return 1 / a === 1 / b;
  } else {
    // NaN
    return a !== a && b !== b;
  }
};
