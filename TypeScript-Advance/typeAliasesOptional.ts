type Employee = {
    id:number,
    name :string,
    salary :number,
    phone ?:string
}

let emp1:Employee={id:1,name:"Win",salary:35000,phone:"089-XXX-XX23"}
let emp2:Employee={id:2,name:"GolF",salary:35000,phone:"089-XXX-XX23"}
emp1.salary = 40000
emp2.salary = 37500

let emp3:Employee={id:3,name:"Jump",salary:30000}
console.log(emp1)
console.log(emp2)
console.log(emp3)