let taskArr = [];
let currentPendingCount = 0;
const executeTask = (func, resolve) => {
  func().then(() => {
    resolve();
    currentPendingCount--;
    if (taskArr.length) {
      executeTask(...taskArr[0]); // 取【0】?
      taskArr = taskArr.slice(1);
    }
  });
};
const add = async (func) => {
  return new Promise(resolve => {
    if (currentPendingCount++ < 2) {
      executeTask(func, resolve);
    } else {
      taskArr.push([func, resolve]);
    }
  });
};

const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));
const addTask = (time, num) => add(() => timeout(time)).then(() => console.log(num));

addTask(1000, 1);
addTask(300, 2);
addTask(400, 3);
addTask(400, 4);
