// console.log("Hello!!!");

// const arr = [1,2,3,4,5,6];

// const myFunc = (value) => {
//     console.log(value);
// }
// arr.forEach(myFunc);



// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }
// console.log(numbers1);
// console.log(numbers2);



// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);

// console.log(myArr);
// console.log(newArr);


// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(numbers);
// console.log(over18);


// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(numbers);
// console.log(sum);


// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// console.log(numbers);
// console.log(allOver18);



const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text = "";

for (let x of keys) {
  text += x + "<br>";
}
// console.log(fruits);
console.log(keys);
