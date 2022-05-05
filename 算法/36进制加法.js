// 36进制由0-9，a-z，共36个字符表示
// 例如：'1b' 换算成10进制等于 1 * 36^1 + 11 * 36^0 = 36 + 11 = 47
// 要求按照加法规则计算出任意两个36进制正整数的和

const add36 = function (a, b) {
  const dictionary = '0123456789ABCDEFGHIJKLMNOPGQRSTUVWXYZ';
  let i = a.length - 1;
  let j = b.length - 1;
  let tmp = 0;
  let res = '';
  while (i >= 0 && j >= 0) {
    const sum = dictionary.indexOf(a[i]) + dictionary.indexOf(b[j]) + tmp;
    if (sum >= 36) {
      tmp = 1;
      res += `${dictionary[sum - 36]}`;
    } else {
      res += `${dictionary[sum]}`;
    }
    i--;
    j--;
  }

  while (i >= 0) {
    const sum = dictionary.indexOf(a[i]) + tmp;
    if (sum > 36) {
      tmp = 1;
      res += `${dictionary[sum - 36]}`;
    } else {
      res += `${dictionary[sum]}`;
    }
  }

  while (j >= 0) {
    const sum = dictionary.indexOf(a[j]) + tmp;
    if (sum > 36) {
      tmp = 1;
      res += `${dictionary[sum - 36]}`;
    } else {
      res += `${dictionary[sum]}`;
    }
  }

  if (tmp !== 0) {
    res += '1';
  }
  return res;
};
