const h = require("http")
// console.log(h)
h.createServer((req,res)=>{         // function ke andar function is called callback function
    res.write("welcome node js")
    res.end()
}).listen(3000,console.log("server start localhost:3000"))
