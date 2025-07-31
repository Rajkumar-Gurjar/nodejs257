const user ={
    name:"Rajkumar",
    city:"gwalior",
    phone:123123,
    team:["ram",56,true],
    pn:function () {
        console.log("hello pn")
    }
}

console.log(user)
console.log(user.team[1])
user.pn()