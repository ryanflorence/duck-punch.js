Duck Punch
==========

Duck punch objects with reckless abandon.

Example
-------

```js
var punch = require('duck-punch');

var baby = {
  poo: function(oz) {
    return 'pooped '+oz + 'oz';
  }
};

baby.poo(2);
// 'pooped 2oz'

punch(baby, 'poo', function(old, oz) {
  return old(oz) + ' of really stinky stuff';
});

baby.poo(10);
// 'pooped 10oz of really stinky stuff'
```

