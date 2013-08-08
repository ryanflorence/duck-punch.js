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

