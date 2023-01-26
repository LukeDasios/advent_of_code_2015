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

    arr.forEach(el => {
        real_count += el.length

        let temp_count = 0
        let i = 1, len = el.length - 1
        while (i < len) {
            let char = el[i]

            if (char === "\\") {
                i++ 
                char = el[i]

                if (char === "\\") {
                    i++
                } else if (char === `"`) {
                    i++
                } else if (char === "x") {
                    i += 3
                }
            } else {
                i++
            } 

            temp_count++
        }

        interpreted_count += temp_count
    })
    
    console.log(real_count - interpreted_count)
})

