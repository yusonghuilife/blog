class EventEmitter {
  constructor () {
    this._eventpool = {};
  }

  on (event, callback) {
    this._eventpool[event]
      ? this._eventpool[event].push(callback)
      : (this._eventpool[event] = [callback]);
  }

  emit (event, ...args) {
    this._eventpool[event] && this._eventpool[event].forEach(cb => cb(...args));
  }

  off (event, callback) {
    if (this._eventpool[event]) {
      this._eventpool[event] = this._eventpool[event].filter(
        fn => fn !== callback
      );
    }
  }

  once (event, callback) {
    this.on(event, () => {
      callback();
      this.off(event);
    });
  }
}
