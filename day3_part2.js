/**
 * PART TWO
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Define a row and column variable for both Santa and his robot.
 * 2. Define a grid variable equal to an empty Map, and set the origin value (0, 0) to 1
 * 3. Split the input data by "" and iterate over each direction command.
 * 4. Check to see whether its Santas turn or not. 
 * 4. Check to see what the direction command is, and increment/decrement either Santas or the Robots row or col accordingly.
 * 5. Create a unique string from the coordinates you are at, set it equal to a variable called coords.
 * 6. Store that variable in your grip map.
 * 7. Switch who's turn it is by toggling the turn boolean.
 * 8. Log to the console the size of your grid map. 
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let santasTurn = true
  let santasRow = 0, santasCol = 0
  let robotsRow = 0, robotsCol = 0
  let grid = new Map()
  grid.set(`0 0`, 1)

  data.split("").forEach(direction => {
    let coords

    if (santasTurn) {
      if (direction === "^") {
        santasRow--
      } else if (direction === "v") {
          santasRow++
      } else if (direction === "<") {
          santasCol--
      } else if (direction === ">") {
          santasCol++
      }

      coords = `${santasRow} ${santasCol}`
    } else {
      if (direction === "^") {
        robotsRow--
      } else if (direction === "v") {
          robotsRow++
      } else if (direction === "<") {
          robotsCol--
      } else if (direction === ">") {
          robotsCol++
      }

      coords = `${robotsRow} ${robotsCol}`
    }

    grid.set(coords, 1)
    santasTurn = !santasTurn
  })

  console.log(grid.size)
});