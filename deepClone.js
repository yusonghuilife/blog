const symbolName = Symbol();
const obj = {
  objNumber: new Number(1),
  number: 1,
  objString: new String('ss'),
  string: 'stirng',
  objRegexp: new RegExp('\\w'),
  regexp: /w+/g,
  date: new Date(),
  function: function () {
  },
  array: [{a: 1}, 2],
  [symbolName]: 111
};
obj.d = obj;


function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget); // [] , {} boolean为true
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else if (typeof target === 'function') {
    return target.toString()
  } else {
    return target
  }
};

console.log(clone(obj));
