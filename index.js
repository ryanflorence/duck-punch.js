module.exports = function(o, m, f) {
  return arguments.length == 3 ? punch(o, m, f) : punchObject(o, m);
};

function punch(obj, method, fn) {
  var old = obj[method];
  obj[method] = function() {
    var args = [].slice.call(arguments, 0);
    args.unshift(old.bind(obj));
    return fn.apply(obj, args);
  };
}

function punchObject(obj, ext) {
  for (var method in ext) {
    if ('function' == typeof obj[method] && 'function' == typeof ext[method]) {
      punch(obj, method, ext[method]);
    } else {
      obj[method] = ext[method];
    }
  }
  return obj;
}

