/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) return [];
  const res = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let numsLength = matrix[0].length * matrix.length;
  while (numsLength >= 1) {
    for (let i = left; i <= right && numsLength >= 1; i++) {
      res.push(matrix[top][i]);
      numsLength--;
    }
    top++;
    for (let i = top; i <= bottom && numsLength >= 1; i++) {
      res.push(matrix[i][right]);
      numsLength--;
    }
    right--;
    for (let i = right; i >= left && numsLength >= 1; i--) {
      res.push(matrix[bottom][i]);
      numsLength--;
    }
    bottom--;
    for (let i = bottom; i >= top && numsLength >= 1; i--) {
      res.push(matrix[i][left]);
      numsLength--;
    }
    left++;
  }
  return res;
};
