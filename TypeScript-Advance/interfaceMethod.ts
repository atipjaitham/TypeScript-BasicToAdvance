interface Person{
    name: string
    age?: number
    readonly gender: string
    info:()=>void;
}
let person1:Person={
    name: "GOLF",
    age: 23,
    gender: "Male",
    info() {
        console.log(`Current Date: ${new Date().toLocaleString()}`)
    },
}
person1.info()

