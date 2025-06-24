// console.log("Hello, Arrays!!");

// const arr = ['Tata', 'Mahindra', 'suzuki', 'Hyundai'];
// console.log(arr);

// // Reading the value from array
// // 1st way -->>
// const company = arr[1];
// console.log(company);

// // 2nd way -->>
// const [a, b, c] = arr;
// console.log(b, c);


// // -----------------------------------------------------------------------------------
// // Adding value in array
// const arr = ['Tata', 'Mahindra', 'suzuki', 'Hyundai'];
// // arr[10] = "Honda"; // It puts all empty spaces empty and put the value at the specified index
// // // These empty spaces called holes

// // arr.push("Honda"); // Push new element at the end of the array
// // arr.pop(); //Pop element from the end of the array

// // arr.shift(); //remove element from the starting of the array
// // arr.unshift("Honda"); // Push new element at the starting of the array

// arr.splice(2, 1, "Kia", "BYD", "Honda"); // Start from 2nd index remove 1 element and add further entries
// arr.splice(1, 0, "BMW", "Porche"); // It is not necessary to reomve elements or add elements we can add the elements at perticular place by keeping 0 at the number of elements we have to delete

// console.log(arr.at(3));
// console.log(arr);


// const arr = ['Tata', 'Mahindra', 'suzuki', 'Hyundai'];
// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("Honda")); // It is not present in the array so it will return -1.

// ---------------------------------------------------------------------------------------------

// const arr = [
//     {name : "Nishant", city : "Jaipur"},
//     {name : "Ritesh", city : "Mumbai"},
//     {name : "Shivam", city : "Pune"},
// ];

// console.log(arr.indexOf({name : "Nishant", city : "Mumbai"}));
// console.log(arr.indexOf({name : "Nishant", city : "Jaipur"}));


// // ----------------------------------------------------------------------------------------------
// // Double Equal (==)
// // 1. Performs loose equality comparison.
// // 2. It attempts to convert the operands to the same type before making the comparison. 
// // 3. Type coercion can sometimes lead to unexpected results.
// // 4. For example, 1 == "1" evaluates to true because the string "1" is converted to the number 1.
// console.log("10" == "10"); //TRUE
// console.log("10" == 10); //TRUE
// console.log(10 == 10); //TRUE
// console.log(9 == 9); //TRUE
// console.log(9 == "10"); //FALSE
// console.log("a" == "A"); //FALSE

// // Triple Equal (===)
// // 1. Performs strict equality comparison.
// // 2. It does not perform type coercion.
// // 3. It requires both the values and types of the operands to be the same.
// // 4. For example, 1 === "1" evaluates to false because the types (number and string) are different.
// console.log("10" === "10"); //TRUE
// console.log("10" === 10); //FALSE
// console.log(10 === 10); //TRUE
// console.log(9 === 9); //TRUE
// console.log(9 === "10"); //FALSE
// console.log("a" === "A"); //FALSE


// -------------------------------------------------------------------------------------------------
// console.log({name : "Raj"} == {name : "Raj"}) // False

// const person = {name : "Raj"};
// console.log(person == person); // True

// const person1 = {name : "Raj"};
// const person2 = {...person1};
// console.log(person1 == person2); // False
// console.log({} == {}); // False
// console.log(undefined == null); // True

// ------------------------------------------------------------------------------------------------
// const arr = ['Tata', 'Mahindra', 'Honda', 'suzuki', 'Hyundai', 'Honda'];
// console.log(arr.indexOf('Honda'));
// console.log(arr.lastIndexOf('Honda'));
// console.log(arr.includes('Honda'));

// ------------------------------------------------------------------------------------------------
// const myFunc = (a, b, c, d) => {
//     console.log(a, b, c, d);
// };
// const arr = ['ab', 'xy', 'mn', 'ab', 'pq'];
// const elem = arr.find(myFunc);


// const myFunc = (element, index, array, .....further all are undefined) => {

// };

// const myFunc = (a) => {
//     if(a.name ===  "Nishant") return true;
//     else return false;
// };
// const arr = [
//     {name : "Nishant", city : "Jaipur"},
//     {name : "Ritesh", city : "Mumbai"},
//     {name : "Shivam", city : "Pune"},
// ];
// const ans = arr.find(myFunc);
// console.log(ans);


// -------------------------------------------------------------------------------------------------
// Iteration Methods

const arr = [
    {name : "Nishant", city : "Jaipur", score : 70},
    {name : "Ritesh", city : "Mumbai", score : 25},
    {name : "Shivam", city : "Pune", score : 69},
];
const myFunc = (elem) => {
    if(elem.score >= 30){
        return {...elem, remark : "Pass"};
    }
    else{
        return {...elem, remark : "Fail"};
    }
};
const resultArr = arr.map(myFunc);
console.log("🟡 : ResultArr : ", resultArr);