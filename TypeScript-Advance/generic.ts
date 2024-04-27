//Normal
function getElementNumber(arr:number[],count:number){
    return arr.slice(arr.length-count)
}

function getElementString(arr:string[],count:number){
    return arr.slice(arr.length-count)
}

function getElementBoolean(arr:boolean[],count:number){
    return arr.slice(arr.length-count)
}


const myNum:number[] = [10,20,30,40,50,60]
const myName:string[] = ["GOLF","WIN","JUMP","KAO"]
const myBool:boolean[] = [true,true,false,true,false]

//Generic
function getElement<T>(arr:T[],count:number){
    return arr.slice(arr.length-count)
}
console.log(getElement<number>(myNum,2))
console.log(getElement<string>(myName,2))
console.log(getElement<boolean>(myBool,2))

//Generic Multiple Function
function merge<T extends object,U extends object>(param1:T,param2:U){

    return{
        ...param1,
        ...param2
    }
}

// merge<string,boolean>("PETER",true)
// merge<boolean,boolean>(false,true)

const product={name:"Shirt",price:500}
const description={colors:["RED","GREEN","PINK"]}

console.log(merge<object,object>(product,description))