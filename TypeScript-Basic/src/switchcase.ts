let service:number = 0;
let resultService:string = '';

switch (service) {
    case 1:resultService="Inqury amount";
        break;
    case 2:resultService="Desposit"
        break;
    case 3:resultService="Withdraw"
        break;
    default:resultService="Please select exist service again!"
        break;
}
console.log(resultService)