/**
 * PART ONE
 * Time Complexity: -
 * Space Complexity: -
 * 
 * Explanation: 
 * 1. Import the crypto module to use the md5 hash.
 * 2. Declare the counter variable and set it equal to 0. 
 * 3. Until we find the key that solves the hash (when the hash has 5 leading zeros) keep generating new hashes by incrementing the counter variable.
 * 4. Upon finding the key that solves the hash, print it to the console
 * */

const crypto = require('crypto')
const HASH = 'yzbqklnj'
let counter = 0

while (true) {
    let hash = crypto.createHash('md5').update(HASH + counter).digest("hex")
    console.log(`counter: ${counter}   hash: ${hash}`)
    if (hash.slice(0, 5) === "00000") {
        console.log("\n\n\n" + counter)
        break
    }  
    counter++
}


