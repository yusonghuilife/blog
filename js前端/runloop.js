const log = (time) => {
  setTimeout(() => {
    console.log('log');
    log(time);
  }, time);
};
log(3000);
