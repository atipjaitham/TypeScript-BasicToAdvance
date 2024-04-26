interface Job{
    title:string,
    income:number
}
interface Contact{
    phone ?:string,
    address:string
}

interface Person extends Job,Contact{
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
    title: "QA",
    income: 37500,
    phone: "089-XXX-XXX9",
    address: "BKK"
}
console.log(person1)

