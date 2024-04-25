const position:{lat:number,long:number}={lat:0.00,long:0.00}

const randomPosition = ():{lat:number,long:number} => {
    return{
        lat:Math.random(),
        long:Math.random()
    }
}

console.log(randomPosition())