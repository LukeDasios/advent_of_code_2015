/**
 * PART TWO
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Define a floor variable that tracks what level Santa is on.
 * 2. Loop through the input array. 
 * 3. For each element, if the element equals "(", iterate the floor variable. Else, the element equals "(", decrement the floor variable.
 * 4. Check to see if the floor level equals -1. If it does, print the first location where the level equalled -1 to the console and exit the loop.
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let floor = 0

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
        floor++
    } else {
        floor--
    }

    if (floor === -1) {
        console.log(i + 1)
        break
    }
  }
});