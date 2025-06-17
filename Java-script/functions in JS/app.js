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



// //---------------------------------------------------------------------
// //3. Function Assingment (anonymous function)
// const printBill = function (Name, amount){
//     console.log("------------------");
//     console.log("Your Bill for ", Name);
//     console.log("👉👉 Rs.--> ", amount);
//     console.log("------------------");
// }


// const calculateBillPrice = function (price, gst){
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


// //---------------------------------------------------------------------
// //3. Arrow Function
// const printBill = (amount) => {
//     console.log("------------------------");
//     console.log("Your Total Bill Amount for Food, Clothes and Drinks");
//     console.log("Rs. ->", amount);
//     console.log("------------------------");
// }

// const calculateGstAmountForFood = (price) => {
//     return price * 1.05;
// }

// const calculateGstAmountForClothes = (price) => {
//     return price * 1.12;
// }

// const calculateGstAmountForDrinks = (price) => {
//     return price * 1.20;
// }

// // const res = calculateGstAmountForFood(50) + calculateGstAmountForClothes(60) + calculateGstAmountForDrinks(70);
// // printBill(res);

// const generateBill = (food, clothes, drinks) => {
//     const foodAmount = calculateGstAmountForFood(food);
//     const clothesAmount = calculateGstAmountForClothes(clothes);
//     const drinksAmount = calculateGstAmountForDrinks(drinks);

//     const finalBill = foodAmount + clothesAmount + drinksAmount;
//     printBill(finalBill);
// }
// generateBill(50, 60, 70);



const printBillForFood = (amount) => {
    console.log("------------------------");
    console.log("Your Total Bill Amount for Food");
    console.log("Rs. ->", amount);
    console.log("------------------------");
}
const printBillForFoodAndDrinks = (amount) => {
    console.log("------------------------");
    console.log("Your Total Bill Amount for Food and Drinks");
    console.log("Rs. ->", amount);
    console.log("------------------------");
}
const printBillForAll = (amount) => {
    console.log("------------------------");
    console.log("Your Total Bill Amount for Food, Clothes and Drinks");
    console.log("Rs. ->", amount);
    console.log("------------------------");
}

const calculateGstAmountForFood = (price) => {
    return price * 1.05;
}

const calculateGstAmountForClothes = (price) => {
    return price * 1.12;
}

const calculateGstAmountForDrinks = (price) => {
    return price * 1.20;
}

//Higher Order Function -> The function which accepts another function as a parameter or returns a sunctions
const generateBill = (food, clothes, drinks, cb) => {
    const foodAmount = calculateGstAmountForFood(food);
    const clothesAmount = calculateGstAmountForClothes(clothes);
    const drinksAmount = calculateGstAmountForDrinks(drinks);

    const finalBill = foodAmount + clothesAmount + drinksAmount;
    cb(finalBill);
}
generateBill(50, 60, 70, printBillForAll); // printBillForAll is a callBack
generateBill(50, 0, 70, printBillForFoodAndDrinks); // printBillForFoodAndDrinks is a callBack
generateBill(50, 0, 0, printBillForFood); // printBillForFood is a callBack

