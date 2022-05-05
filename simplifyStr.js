const nums1 = [1, 2, 3, 5, 7, 8, 10];

function simplifyStr (arr) {
  if (arr.length === 0) return;
  const res = [];
  let first = last = arr[0];
  for (let i = 0; i < arr.length; i++) {
    last++;
    if (last !== arr[i + 1] && last - 1 !== first) {
      res.push(`${first}~${arr[i]}`);
      last = first = arr[i + 1];
    } else if (last !== arr[i + 1] && last - 1 === first) {
      res.push(`${first}`);
      last = first = arr[i + 1];
    } else {
    }
  }

  return res;
}

console.log(simplifyStr(nums1).join(','));
