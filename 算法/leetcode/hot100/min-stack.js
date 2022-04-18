/**
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
*/

// 解法1，额外用一个栈存所有的最小值
const MinStackWithDoubleStack = function () {
  this.stack = []; // 存元素
  this.minStack = []; // 存最小值
};

/**
 * @param {number} val
 * @return {void}
 */
MinStackWithDoubleStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length > 0) {
    if (this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  } else {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStackWithDoubleStack.prototype.pop = function () {
  const deleteNum = this.stack.pop();
  if (deleteNum === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStackWithDoubleStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStackWithDoubleStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

// 解法2 min来记录最小值，之前的最小值push进栈存储
const MinStackWithExtraVariable = function () {
  this.min = Number.MAX_SAFE_INTEGER;
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStackWithExtraVariable.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.min = val;
    this.stack.push(val);
    return;
  }
  if (val <= this.min) {
    this.stack.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStackWithExtraVariable.prototype.pop = function () {
  if (this.stack.pop() === this.min) {
    this.min = this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MinStackWithExtraVariable.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStackWithExtraVariable.prototype.getMin = function () {
  return this.min;
};

// 解法3，栈中存储与最小值的差值，每次push / pop计算得出差值
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
