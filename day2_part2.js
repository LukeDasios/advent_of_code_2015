/**
 * PART TWO
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Define a measurements variable that splits the data input by the new line character
 * 2. Define a total_square_feet variable that tracks the total square feet of ribbon needed for all the presents.
 * 3. Loop through the input array. 
 * 4. Define the variables length, width, and height by splitting each element by the "x" character.
 * 5. Define the variable sizes to sort the length, width, and height variables in increasing order
 * 6. Add the total required ribbon for that present to the total_square_feet amount
 * 7. Console the total_square_feet variable to the console.
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // #1
  let measurements = data.split("\n")

  // #2
  let total_square_feet = 0
  
  // #3
  measurements.forEach(el => {
    // #4
    let [length, width, height] = el.split("x")

    // #5
    let sizes = [length, width, height].sort((a, b) => a - b)

    // #6
    total_square_feet += ((sizes[0] * 2) + (sizes[1] * 2) + (length * width * height))
  })

  // #7
  console.log(total_square_feet)
});