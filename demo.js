const d = require("http")

d.createServer((req,res)=>{
    res.write("Hello demo ")
    res.end()
}).listen(5000,console.log("Server start in demo file"))

// ctrl+C is used to stop the server

// nodemon isliye install karenge jisse baar baar server ko start stop nhi karna padega thode thode changes ke baad
// nodemon install karenge   ->    npm i -g nodemon
// uske baad run karenge to error aayegi to uss error ko copy kr ke sdearcg karenge or ye paste karenge terminal me    ->    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser