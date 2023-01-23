/**
 * PART ONE
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

// Use this command: cat puzzle_input.txt | grep "[aeiou].*[aeiou].*[aeiou]" | grep "\(.\)\1" | egrep -v "(ab|cd|pq|xy)" | wc -l

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let arr = data.split("\n")
  let nice_strings = 0
  let VOWELS = new Map()
  VOWELS.set("a", 1)
  VOWELS.set("e", 1)
  VOWELS.set("i", 1)
  VOWELS.set("o", 1)
  VOWELS.set("u", 1)

//   A nice string is one with all of the following properties:

//   It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//   It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//   It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

  arr.forEach(el => {
    let test1 = false, test2 = false, test3 = true;
    let number_of_vowels = 0

    // Test #1
    for (let i = 0; i < el.length; i++) {
        if (VOWELS.has(el[i])) {
            number_of_vowels++
            if (number_of_vowels === 3) {
                test1 = true
                break
            }
        }
    }

    // Test #2
    for (let i = 0; i < el.length - 1; i++) {
        if (el[i] === el[i+1]) {
            test2 = true
            break
        }
    }

    // Test #3
    for (let i = 0; i < el.length - 1; i++) {
        let char = el[i]

        if (char === "a" && el[i + 1] === "b") {
            test3 = false
            break
        } else if (char === "c" && el[i + 1] === "d") {
            test3 = false
            break
        } else if (char === "p" && el[i + 1] === "q") {
            test3 = false
            break
        } else if (char === "x" && el[i + 1] === "y") {
            test3 = false
            break
        }
    }

    if (test1 && test2 && test3) nice_strings++
  })

  console.log(nice_strings)
});