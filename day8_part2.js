/**
 * PART ONE
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n)
 * 
 * Explanation: 
 * 1. Split the data into an array called arr for every newline character ("\n")
 * 2. Create a varaible for the real count and another for the interpreted count
 * 3. Iterate over the arr array
 * 4. For each element, add the length of the element to the real_count counter
 * 5. Calculate the interpreted length of the string, add it to the interpreted_count counter
 * 6. Log to the console real_count - interpreted_count
 * */

const fs = require('fs');

fs.readFile('puzzle_input.txt', 'utf8', (err, data) => {
    if (err) {
    console.error(err);
    return;
    }

    let arr = data.split('\n')
    let real_count = 0
    let interpreted_count = 0

    // "" encodes to "\"\"", an increase from 2 characters to 6.
    // "abc" encodes to "\"abc\"", an increase from 5 characters to 9.
    // "aaa\"aaa" encodes to "\"aaa\\\"aaa\"", an increase from 10 characters to 16.
    // "\x27" encodes to "\"\\x27\"", an increase from 6 characters to 11.

    arr.forEach(el => {
        real_count += el.length
        interpreted_count += JSON.stringify(el).length
    })
    
    console.log(interpreted_count - real_count)
})