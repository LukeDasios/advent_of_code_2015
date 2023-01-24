/**
 * PART ONE
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Make a grid variable, that stores the 1000x1000 grid needed for this problem
 * 2. Make an arr variable, that splits the data input by the newline character ("\n")
 * 3. Iterate over the arr variable, complete whats required for each instruction
 * 4. Make a split variable, by splitting the instruction by a space ("")
 * 5. If the instruction is to "toggle", iterate over the rows and cols specified and add 2 brightness levels to each cell
 * 6. If the instruction is "turn" and "on/off", iterate over the rows and cols specified and either increment/decrement the cell value (cannot decrement below 0)
 * 7. Make a lights_on variable to calculate the total brightness after all the instructions are finisheds
 * 8. Iterate over the 2D grid array, takes O(n^2) time, iterate the lights_on variable for each light that is left on and
 * 9. Log the lights_on variable to the console
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Make the 1000 x 1000 grid, where 0 means the light is off and 1 means the light is on
  let grid = [];

  for (let i = 0; i < 1000; i++) {
    grid.push([])

    for (let j = 0; j < 1000; j++) {
        grid[i].push(0)
    }
  }

  let arr = data.split("\n")

  arr.forEach(instruction => {
    let split = instruction.split(" ")
    let word1 = split[0]

    if (word1 === "toggle") {
        let [row1, col1] = split[1].split(",").map(el => parseInt(el))
        let [row2, col2] = split[3].split(",").map(el => parseInt(el))

        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                grid[i][j] += 2
            }
        }
    } else {
        let word2 = split[1]
        let [row1, col1] = split[2].split(",").map(el => parseInt(el))
        let [row2, col2] = split[4].split(",").map(el => parseInt(el))

        if (word2 === "on") {
            for (let i = row1; i <= row2; i++) {
                for (let j = col1; j <= col2; j++) {
                    grid[i][j]++
                }
            }
        } else {
            for (let i = row1; i <= row2; i++) {
                for (let j = col1; j <= col2; j++) {
                    if (grid[i][j] !== 0) {
                        grid[i][j]--
                    }
                }
            }
        }
    }
  })
 
  let lights_on = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        lights_on += grid[i][j]
    }
  }

  console.log(lights_on)
});