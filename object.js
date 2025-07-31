// Step 1 
// user ak const variable hai jisme name city phone variable store hai aur team array aur pn function storre hai .

const user ={
    name:"Rajkumar",
    city:"gwalior",
    phone:123123,
    team:["ram",56,true], // js me array hetrogenious datavalue k0 store kr skta h
    pn:function () {
        console.log("hello pn")
    }
}

console.log(user) // print user variable
console.log(user.team[1]) // array indexing
user.pn() // function call