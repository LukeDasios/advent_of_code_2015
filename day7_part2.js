const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

    var arr = data.split('\n')
    gates = {};
    gates.run = function(gate) {
        if (typeof gates[gate] === 'function') {
            gates[gate] = gates[gate]();
        }
        return gates[gate];
    };
    for (var i = 0, l = arr.length; i < l; i++) {
        var task = arr[i].split(' -> ');
        gates[task[1]] = new Function('return ' +
            task[0].replace(/(AND|OR|RSHIFT|LSHIFT|NOT)/, function(op) {
                return {
                    AND: '&',
                    OR: '|',
                    RSHIFT: '>>',
                    LSHIFT: '<<',
                    NOT: '~'
                }[op] || "";
            }).replace(/([a-z]+)/g, "gates.run('$1')"));
    }
    /* part 2: override wire b */
    gates.b = function(){ return 16076; }
    
    console.log(gates.a());
})

