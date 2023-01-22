/**
 * PART ONE
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Define a measurements variable that splits the data input by the new line character
 * 2. Define a total_square_feet variable that tracks the total square feet of wrapping paper needed to wrap all the presents.
 * 3. Loop through the input array. 
 * 4. Define the variables length, width, and height by splitting each element by the "x" character.
 * 5. Define the variable sizes to sort the length, width, and height variables in increasing order
 * 6. Add the total required wrapping paper for that present to the total_square_feet amount
 * 7. Console the total_square_feet variable to the console.
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let row = 0, col = 0
  let grid = new Map()
  grid.set(`00`, 1)
  
  for (let i = 0; i < data.length; i++) {
    let el = data[i]

    if (el === "^") {
        row--
    } else if (el === "v") {
        row++
    } else if (el === "<") {
        col--
    } else if (el === ">") {
        col++
    }

    let coords = `${row}${col}`
    if (grid.has(coords)) {
        grid.set(coords, grid.get(coords) + 1)
    } else {
        grid.set(coords, 1)
    }
  }

  console.log(grid.size)
});