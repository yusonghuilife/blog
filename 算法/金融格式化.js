/**
 * 注意负数小数点
 * @param {string} num 传入的数字
 * @returns 加上前分位后的数字
 */
function dealNumToThousands (num) {
  if (isNaN(num)) return '';
  let parsedNum = num.toString();
  if (parsedNum.indexOf('.') === -1) {
    parsedNum = parsedNum.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`);
  } else {
    parsedNum = parsedNum.replace(/\d{1,3}(?=(\d{3})+\.)/g, (s) => `${s},`);
  }
  return parsedNum;
}

console.log(dealNumToThousands(10000000));
console.log(dealNumToThousands(-110000000));
console.log(dealNumToThousands(-110000.0100));
console.log(dealNumToThousands(-1));
console.log(dealNumToThousands(0));
