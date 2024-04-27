// Typeof Guards: Check type in valiable
function truncate(value:string|number,length:number){
    if(typeof(value) == "number"){
        return value.toString().slice(0,length)
    }
    else{
        return value.slice(0,length)
    }
}

console.log(truncate("GOLF",2))
console.log(truncate(28071997,2))

// Equality Narrowing: Check the equal value between two variables
function compareValue(x:string|number, y:string|number){
    if(x === y){
        console.log("Is Equal")
    }
    else{
        console.log("Is Not Equal")
    }
}
console.log(compareValue(3,"3"))


// InstandOf Narrowing: Check Object be create from class
class Users{
    constructor(public username:string){

    }

}
class Employee{
    constructor(public name:string){

    }
}
function printObject(obj:Employee | Users){
    if(obj instanceof Employee){
        console.log("This object from Employee Class")
    }else {
        console.log("This object from Users Class")
    }
}
printObject(new Users("ATPXJ"))

// Discriminated Unions: Check and filter the type the type of union
interface Rectangle{
    width:number
    height:number
    type:"Rectangle"
}
interface Triangle{
    base:number
    height:number
    type:"Triangle"
}
type shape = Rectangle | Triangle
function calculateArea(s:shape){

    switch (s.type) {
        case "Rectangle":
            return s.width * s.height
            break;
        case "Triangle":
            return 0.5 * s.base * s.height
        default:
            return "Data is error!!!"
            break;
    }
}
calculateArea({width:30,height:40,type:"Rectangle"})
calculateArea({base:99,height:456,type:"Triangle"})
console.log(calculateArea({width:30,height:40,type:"Rectangle"}))
console.log(calculateArea({base:99,height:456,type:"Triangle"}))

