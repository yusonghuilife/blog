;(function () {
  let lastCall = 0;
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (cb) {
      const current = new Date().getTime();
      const timeToCall = Math.max(0, 16.7 - (current - lastCall));
      const id = setTimeout(cb, timeToCall);
      lastCall = current + timeToCall;
      return id;
    };
  };

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  };
})();
