//Example 1
// function sayHi(name?:unknown):unknown{
//     if(!name){
//         return `Hello TypeScript`
//     }
//     if(typeof name === "string"){
//         return `Hello ${name}`
//     }
//     throw new Error("Data is wrong!");
    
// }
// console.log(sayHi())
// console.log(sayHi("ATIP"))
// console.log

//Example 2
function total(a?:unknown ,b?:unknown):unknown{
    if(typeof a === "number" && typeof b === "number"){
        return a+b
    }
    if(typeof a === "string" && typeof b === "string"){
        return parseInt(a)+parseInt(b)
    }
    throw new Error("Data type is Wrong!");
    
}

console.log(total(100,200))
console.log(total("28","07"))
