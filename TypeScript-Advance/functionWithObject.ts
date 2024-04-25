//undefine type data
const person1={
    name: "ATIP",
    age: 24
}

//define type data
const person2:{name:string,age:number}={name:"GOLF",age:23}
const position:{lat:number,long:number}={lat:0.00,long:0.00}

function showDetails(data:{name:string,age:number}){
        console.log(`Name : ${data.name} Age : ${data.age}`)
}
showDetails(person1)