// Step 6 
// Ye create server ko practice krne ke liye use kiya hai .

const d = require("http")

d.createServer((req,res)=>{
    res.write("Hello demo ")
    res.end()
}).listen(5000,console.log("Server start in demo file"))

// agar apun ak baar server run kr lete hai uske baad browser pr page run ho jayega aur agar baad me koi change krte hai to agar page ko referesh karenge to change show nhi hoga . 
// change ko show karne ke liye baar baar stop start krna padega . iss problem se bachne ke liye hmm nodemon ka use karenge jisse automatically hote rhe referesh krne se changes show ho 

// ctrl+C is used to stop the server in terminal

// nodemon isliye install karenge jisse baar baar server ko start stop nhi karna padega thode thode changes ke baad
// nodemon install karenge  cmd me  ->    npm i -g nodemon
// nodemon install krne ke baad file run karenge to error aayegi to uss error ko copy kr ke search karenge or ye paste karenge terminal me    ->    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser