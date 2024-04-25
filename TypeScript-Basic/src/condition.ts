let amount:number =50;
let result:string;

//1st condition style
if(amount%2 === 0){
    result="Odd"
}else{
    result="Even"
}
console.log(`Result is ${result} from first condition style`)

//2nd condition style (ternary)
result = (amount%2 ===0) ? "Odd":"Even"
console.log(`Result is ${result} from second condition style`)