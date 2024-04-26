//array
type Employee = {
    name:string,
    salary:number,
    department?:string
}

const employee:Employee[]=[]
employee.push({name:"GOLF",salary:35000,department:"QA"})
employee.push({name:"WIN",salary:35000})
employee.push({name:"JUMP",salary:35000,department:"DEV"})

for(let person of employee){
    console.log(person)
}

employee.forEach(element=>{
    console.log(element)
})