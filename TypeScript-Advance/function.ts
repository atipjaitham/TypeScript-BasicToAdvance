//void
function sayHi():void{ //void isn't nessecery
    console.log("Hello Function!");
}
sayHi();

//parameter
function sayHiName(name:string){
    console.log(`Hello ${name}`);
}
sayHiName("ATIP");

//return
function getDiscount():number{
    return 500;
}
console.log(getDiscount())

//parameter and return
function checkNumber(num:number):string{
    if(num %2 === 0){
        return "Odd";
    }
    else{
        return "Even"
    }
}

function totalPrice(priceA:number, priceB:number):number{
    return priceA+priceB;
}

console.log(checkNumber(10))
console.log(totalPrice(100,2000))

//arrow fuction
const checkNumberAR=(num:number):string =>{
    if(num %2 === 0){
        return "Odd";
    }
    else{
        return "Even"
    }
}

const totalPriceAR=(priceA:number, priceB:number):number => {
    return priceA+priceB;
}

console.log(checkNumberAR(10))
console.log(totalPriceAR(100,2000))

