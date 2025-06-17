// const cse370 = { // This is ths declaration of the object
//     name : "Nishant Singh",
//     address : "Jhunjhunu, RJ",
//     bloodgroup : "O+",
//     getInfo : () => {
//         console.log("This is student info");
//     }
// };
// console.log(cse370);

// const cse341 = {
//     name : "Ritesh Pal",
//     address : "Gaziabad, UP",
//     bloodgroup : "B+",
// };
// console.log(cse341);


// // Read the values of property
// const studentName = cse370.name;
// console.log(studentName);

// // Update a value of property
// cse370.bloodgroup = "O-";

// // Add a key-value pair
// cse341.college = "LPU";

// // delete a key-value pair
// delete cse341.address;

// console.log("CSE341 : ", cse341);


// const person = {
//     name : "Nishant Singh",
//     height : 1.79,
//     weight : 77,
//     college : "LPU",
//     roll_no : 12216370,
//     getBMI : function () { // IF we use function keywordthe we have to use "this." for accessing
//         const bmi = this.weight / this.height ** 2;
//         console.log(`BMI for ${this.name} is ${bmi.toFixed(2)}`);
//         if(bmi < 20) console.log("It seems to be UnderWeight.");
//         else if(bmi >= 20 && bmi < 25) console.log("It seems to be fit.");
//         else if(bmi >= 25 && bmi < 30) console.log("It seems to be OverWeight.");
//         else console.log("It seems to be Obese.");
//     },
// };

// person.getBMI();
// person.weight = 90;
// person.getBMI();

// const allKeys = Object.keys(person);
// console.log("All Keys in person object:", allKeys);
// const allValues = Object.values(person);
// console.log("All Values in person object:", allValues);
// const allEntries = Object.entries(person);
// console.log("All Entries in person object:", allEntries);



// const person = {
//     name : "Nishant Singh",
//     height : 1.79,
//     weight : 77,
//     college : "LPU",
//     roll_no : 12216370,
// };


// const whichKey = prompt("Enter the you want to access in person object: ");

// const keyWanted = person[whichKey];
// console.log(keyWanted);


// const person1 = {
//     name : "Nishant Singh",
//     height : 1.79,
//     weight : 77,
//     college : "LPU",
//     roll_no : 12216370,
// };

// const person2 = person1; // This makes a shallow copy of other object if we print of any person1 or person2 it will always print same person name which is last updated

// person1.name = "Shivam";
// person2.name = "Kulwant"; //It will always print kulwant as the name for person1 and person2

// console.log("Person1 : ", person1);
// console.log("Person2 : ", person2);

// // -------------- De-structuring
// const {weight, college} = person1;
// console.log("🟡 : -->", weight, college);



const person1 = {
    name : "Nishant Singh",
    height : 1.79,
    weight : 77,
    college : "LPU",
    roll_no : 12216370,
};

const person2 = {...person1}; // Spread operator --> Creates a shallow copy of an array or object, preventing unintended modifications to the original. It just like we create a new empty object {} and then inside it we put the keys and their values of the different object
// The spread operator will not create deep copy of the other object but also it is not shallow copy if therre are nested object then it will create some problem

person1.name = "Shivam";
person2.name = "Kulwant";

console.log("Person1 : ", person1);
console.log("Person2 : ", person2);