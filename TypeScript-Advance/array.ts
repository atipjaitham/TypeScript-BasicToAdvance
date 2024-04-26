/// Basic
// const user1:string = "GOLF"
// const user2:string = "WIN"
// const user3:string = "JUMP"

// // Array non definded
// const users:string[] = []
// users.push("GOLF")
// users.push("WIN")
// users.push("JUMP")
// console.log(users)

// const age:number[] = []
// age.push(20,23,24)
// console.log(age)

//Access in Array
const users:string[] = ["GOLF","WIN","JUMP"]
users.push("EMMY")
console.log(users.length)

for(let i = 0;i<users.length;i++){
    console.log(`User ${i} is : ${users[i]}`)
}

users.forEach(Element=>{
    console.log(Element)
})