/**
 * PART ONE
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * */

// const fs = require('fs');

// fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   let arr = data.split("\n")
//   let map = new Map()

//   arr.forEach(el => {
//     let first = el[0]

//     if (first === "NOT") {
//         map.set(el[3], ~el[1])
//     } else {
//         let second = el[1]
//         let val1 = map.get(first)
//         let val2 = map.get(el[2])
//         if (!val1) val1 = 0
//         if (!val2) val2 = 0

//         if (second === "AND") {
//             let val = 
//             map.set(el[4], val1 & val2)
//         } else if (second === "OR") {
//             map.set(el[4], val1 | val2)
//         } else if (second === "LSHIFT") {
//             map.set(el[4], val1 << val2)
//         } else if (second === "RSHIFT") {
//             map.set(el[4], val1 >> val2)
//         }
//     }
//   })

//   console.log(map.get("a"))
// });

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
    
    console.log(gates.a());
})

