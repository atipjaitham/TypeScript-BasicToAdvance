//type
type Person={
    name: string
    age?: number
}
// type Person={
//     gender:string
// }
let personType:Person={
    name: "GOLF",
    age: 23,
}
console.log(personType)

//interface
interface PersonI{
    name: string
    age?: number
}
interface PersonI{
    gender?:string
}
let personInterface:PersonI={
    name: "GOLF",
    age: 23,
}
console.log(personInterface)