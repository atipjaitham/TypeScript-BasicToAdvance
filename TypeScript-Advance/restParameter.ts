const total=(...number:number[])=>{
    return number.reduce((result,value)=>{
        return result+value
    },0)
}
console.log(total(100,200,300))
console.log(total(100,200,300,100,200,300))
console.log(total(100,200,300,100,200,300,100,200,300))
