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


