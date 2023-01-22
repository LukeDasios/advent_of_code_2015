/**
 * PART ONE
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Define a floor variable that stores what floor level Santa should climb to.
 * 2. Loop through the input array. 
 * 3. For each element, if the element equals "(", iterate the floor variable. Else, the element equals "(", decrement the floor variable.
 * 4. Print the value of floor to the console
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // #1
  let floor = 0

  // #2
  for (let i = 0; i < data.length; i++) {
    // #3
    if (data[i] === "(") {
        floor++
    } else {
        floor--
    }
  }

  // #4
  console.log(floor)
});

