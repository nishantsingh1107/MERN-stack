// console.log("Hello, functions!");

// let juice = 50;
// let gstOnJuice = 0.1;
// let fries = 70;
// let gstOnFries = 0.05;

// let juiceBillAmount = juice + (juice*gstOnJuice);
// let friesBillAmount = fries + (fries*gstOnFries);

// let finalBillAmount = juiceBillAmount + friesBillAmount;
// console.log(finalBillAmount);
// //---------------------------------------------------------------------
// Funtion Declration Ways
// 1. using function keyword
// console.log("START");

// function printBill(Name, amount){
//     console.log("------------------");
//     console.log("Your Bill for ", Name);
//     console.log("👉👉 Rs.--> ", amount);
//     console.log("------------------");
// }


// function calculateBillPrice(price, gst){
//     let finalAmount = price + price*gst;
//     return finalAmount;
// }

// const res1 = calculateBillPrice(50, 0.1);
// printBill("Mango Juice", res1);
// const res2 = calculateBillPrice(60, 0.1);
// printBill("Orange Juice", res2);
// const res3 = calculateBillPrice(110, 0.05);
// printBill("Fries", res3);

// console.log("END");

// function printBill(Name, amount){
//     console.log("------------------");
//     console.log("Your Bill for ", Name);
//     console.log("👉👉 $--> ", amount);
//     console.log("------------------");
// }


// //---------------------------------------------------------------------
// //2. Function Assingment (Named Assingment)
// const printBill = function printBillXYZ(Name, amount){
//     console.log("------------------");
//     console.log("Your Bill for ", Name);
//     console.log("👉👉 Rs.--> ", amount);
//     console.log("------------------");
// }


// const calculateBillPrice = function calculateBillPriceXYZ(price, gst){
//     let finalAmount = price + price*gst;
//     return finalAmount;
// }

// const res1 = calculateBillPrice(50, 0.1);
// printBill("Mango Juice", res1);
// const res2 = calculateBillPrice(60, 0.1);
// printBill("Orange Juice", res2);
// const res3 = calculateBillPrice(110, 0.05);
// printBill("Fries", res3);

// console.log("END");



//---------------------------------------------------------------------
//3. Function Assingment (anonymous function)
const printBill = function (Name, amount){
    console.log("------------------");
    console.log("Your Bill for ", Name);
    console.log("👉👉 Rs.--> ", amount);
    console.log("------------------");
}


const calculateBillPrice = function (price, gst){
    let finalAmount = price + price*gst;
    return finalAmount;
}

const res1 = calculateBillPrice(50, 0.1);
printBill("Mango Juice", res1);
const res2 = calculateBillPrice(60, 0.1);
printBill("Orange Juice", res2);
const res3 = calculateBillPrice(110, 0.05);
printBill("Fries", res3);

console.log("END");