interface Person{
    name: string
    age?: number
    readonly gender: string
}
let person1:Person;
person1={
    name: "GOLF",
    age: 23,
    gender: "Male"
}
let person2:Person;
person2={
    name: "WIN",
    gender: "Male"
}
person2.name= "METAWIN"
console.log(person1)
console.log(person2)