// Step 5 
// Isme hmm server banana shikenge jiske liye http protocol ka use hoga 

// h variable ke andar http global variable ko store kiya hai uske andar ke bahut saare module function class bahut saari cheej store hai
const h = require("http")
// console.log(h)

// http me se hmm createServer function ka arrow function bana kr use karenge server banane ke liye jisme do arguments hai 
// req aur res . req request ke use hoga aur res response ke use hoga

h.createServer((req,res)=>{         // function ke andar function is called callback function
    res.write("welcome node js")    // res response me ak message write kiya hai
    res.end()                      // res response ko band kiya hai
}).listen(3000,console.log("server start localhost:3000"))   // server ko run krne ke liye .listen(port_no. , terminal message when it run) function ka use karenge
