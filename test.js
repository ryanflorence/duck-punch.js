var punch = require('./index');

var baby = {
  poo: function(oz) {
    return 'pooped '+oz + 'oz';
  }
};

punch(baby, 'poo', function(old, oz) {
  return old(oz) + ' of really stinky stuff';
});

var result = baby.poo(2);
console.assert(result === 'pooped 2oz of really stinky stuff', result);

var obj = {
  x: 1,
  sum: function(y) {
    return this.x + y;
  }
};

result = obj.sum(2);
console.assert(result === 3, result);

punch(obj, {
  sum: function(old, y) {
    return old(y) + y;
  }
});

result = obj.sum(2);
console.assert(result === 5, result);

