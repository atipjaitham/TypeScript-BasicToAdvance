const showEmployee=(name:string, age:number, address:string="BKK") => {
    console.log(`Name : ${name} Age : ${age} Address: ${address}`)
}


showEmployee("ATP", 23, "BKK");
showEmployee("WIN", 22, "Taipei");
showEmployee("JUMP", 20);
console.log(showEmployee("ATP",23,"BKK"))
console.log(showEmployee("WIN",22,"Taipei"))
console.log(showEmployee("JUMP",20))