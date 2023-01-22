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

  let measurements = data.split("\n")
  let total_square_feet = 0

  measurements.forEach(el => {
    let [length, width, height] = el.split("x")
    let sizes = [length, width, height].sort((a, b) => a - b)

    total_square_feet += ((2 * length * width) + (2 * width * height) + (2 * height * length) + (sizes[0] * sizes[1]))
  })

  console.log(total_square_feet)
});