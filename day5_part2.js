/**
 * PART TWO
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Create a variable arr that stores the input data split by the newline character ("\n").
 * 2. Create a variable nice_strings to count the number of nice strings.
 * 3. Create a map variable VOWELS to store all acceptable vowels (a, e, i, o, u).
 * 4. Iterate over arr, for each element apply the 3 tests given to see if the string is nice or not. If the string is nice, increment the nice_strings counter.
 * 5. Log the nice_strings variable to the console
 * */

// Use this command: cat puzzle_input.txt |  grep "\(..\).*\1" | grep "\(.\).\1" | wc -l

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let arr = data.split("\n")
  let nice_strings = 0

//   Now, a nice string is one with all of the following properties:

//   It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
//   It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

  arr.forEach(el => {
    let test1 = false, test2 = false

    // Test #1
    let map = new Map()
    for (let i = 0; i < el.length - 1; i++) {
        let pair = `${el[i]}${el[i+1]}`

        if (map.has(pair)) {
            if (el[i] === el[i+1]) {
                if (i > 0) {
                    // check for front and back overlap
                    if (el[i-1] !== el[i] && el[i+1] !== el[i+2]) {
                        test1 = true
                        break
                    }
                } else {
                    // check for front overlap only
                    if (el[i+2] !== el[i+1]) {
                        test1 = true
                        break
                    }
                }
            } else {
                test1 = true
                break
            }
        } else {
            map.set(pair, 1)
        }
    }    

    // Test #2
    for (let i = 1; i < el.length - 1; i++) {
        if (el[i-1] === el[i+1]) {
            test2 = true
            break
        }
    }

    if (test1 && test2) nice_strings++
  })

  console.log(nice_strings)
});