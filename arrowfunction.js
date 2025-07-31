// Step 4 
// isme hmm arrow function ko smjenge .

// normal function
function abc(){
    console.log("hii")
}
abc()

// arrow function -> ye ak short method hai function banane ka isme curly braceses ke bina bhi function bana skte hai 
//  => ye use hota hai isliye iska name arrow function hai 

// simple arrow function with curly bracese and without any arguments
const user =()=>{
    console.log("hello arrow function")
}
user()

// 2 arguments arrow function
const user1 = (a,b)=>console.log("hello user", a+b)
user1(2,3)

// 1 arguments arrow function
const user2 = a =>console.log(a)
user2(3)