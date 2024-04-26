//normal
let age:number | string
age =50;
age = "ATPX"
console.log(age)

//Union
let namePeople:number | string
namePeople =50;
console.log(namePeople)

//Union Type & Type Alliases
type point={
    x:number
    y:number
}
type position={
    lat:number,
    long:number
}

let coordinates:point | position
coordinates ={x:478,y:386}
coordinates = {lat:8.00034,long:1.118338}
console.log(coordinates)

//Union Type & Function
function sayHi(person:string|string[]){
    if(typeof person === "string"){
        console.log(`Hello! ${person}`)
    }
    else{
        person.forEach((Element) =>{
            console.log(`Hello ${Element}`)
        })
    }
}

sayHi("ATPXX")
sayHi(["GOLF","WIN","JUMP"])