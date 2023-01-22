/**
 * PART ONE
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Define a row and column variable.
 * 2. Define a grid variable equal to an empty Map, and set the origin value (0, 0) to 1
 * 3. Split the input data by "" and iterate over each direction command.
 * 4. Check to see what the direction command is, and increment/decrement row and col accordingly.
 * 5. Create a unique string from the coordinates you are at, set it equal to a variable called coords.
 * 6. Store that variable in your grip map.
 * 7. Log to the console the size of your grid map. 
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let row = 0, col = 0
  let grid = new Map()
  grid.set(`0 0`, 1)

  data.split("").forEach(direction => {
    if (direction === "^") {
        row--
    } else if (direction === "v") {
        row++
    } else if (direction === "<") {
        col--
    } else if (direction === ">") {
        col++
    }

    let coords = `${row} ${col}`
    grid.set(coords, 1)
  })

  console.log(grid.size)
});