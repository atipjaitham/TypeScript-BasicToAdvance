"use strict";
///any
function formatNumber(num) {
    return num.toFixed(2);
}
// let money: any = "299999.2545778";
// money = 4999999.343434"
// console.log(formatNumber(money))
//unknown
let money = 299999.2545778;
money = 4999999.343434;
if (typeof (money) === "number") {
    console.log(formatNumber(money));
}
