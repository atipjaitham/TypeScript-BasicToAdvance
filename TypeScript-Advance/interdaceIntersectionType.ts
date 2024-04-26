interface Job{
    title:string,
    income:number
}
interface Contact{
    phone ?:string,
    address:string
}

interface Person{
    name: string
    age?: number
    readonly gender: string
    info:()=>void;
}

type People = Person & Job & Contact

let personOne:People={
    name: "GOLF",
    age: 23,
    gender: "Male",
    info() {
        console.log(`Current Date: ${new Date().toLocaleString()}`)
    },
    title: "QA",
    income: 37500,
    phone: "089-XXX-XXX9",
    address: "BKK"
}
console.log(personOne)

