type Employee = {
    readonly id:number,
    name :string,
    readonly salary :number,
    phone ?:string
}

let emp1:Employee={id:1,name:"Win",salary:35000,phone:"089-XXX-XX23"}
//emp1.salary = 233333;
emp1.name = "GOLF"
console.log(emp1)