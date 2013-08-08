module.exports = function(obj, method, fn) {
  var old = obj[method];
  obj[method] = function() {
    var args = [].slice.call(arguments, 0);
    args.unshift(old.bind(obj));
    return fn.apply(obj, args);
  };
};

