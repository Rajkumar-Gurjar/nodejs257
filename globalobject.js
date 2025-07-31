// Step 3 
// Global object ke kuch functions hai jinhe  explain kiya hai .

// 1.   __dirname      // ye function file ki directory (location) batane ke liye use hota hai .
// 2.   __filename     // ye function file ki file name directory (location) tak batata hai .
// 3.   require        // ye function global variable ko acces aur fetch krke new variable me store krne ke kaam aata hai.
// 4.   module         // ye dono function mill kr function variable ko global banane ke liye use hota hai
// 5.   exports           example ->  module.exports = student .

console.log(__dirname)
console.log(__filename)

const data = require('./student')
console.log(data)