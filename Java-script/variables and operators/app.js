// window.console.log("Hello, World!!");

// let, const, or var

// let age = 30;
// const year =  2025;
// var block = 22;
//-----------------------------------------------------------------------------------------
// In var---> access without initialization is allowed, re-declaration, and no re-assingment are allowed(all are allowed)
// console.log(age);
// //variables have default value of undefined

// var age = 21; //variable declaration and initialization
// console.log(age);
// var age = 22; //redeclaration of the same variable
// console.log(age);


//-----------------------------------------------------------------------------------------
// In let---> no access without initialization is allowed, no re-declaration, but re-assingment is allowed
// console.log(age);
// initialization is not also allowed before declaration of let type variable
// let age = 21;
// console.log(age);
//redeclaration is only possible in var type cannot be used in let type of variable


//-----------------------------------------------------------------------------------------
// In const---> no access without initialization is allowed, no re-declaration, and no re-assingment are allowed
// console.log(age);
// const age = 21;
// console.log(age);


//-----------------------------------------------------------------------------------------
// "+" -> This can perforn arithmatic addition and also do string concatination
// console.log(1+1); // output will be 2
// console.log(1+'1'); // output will be 11
// console.log('1'+1); // output will be 11
// console.log('1'+'1'); // output will be 11

// // "-" -> This can only perform the arithmatic subtraction
// console.log(1-1); // output will be 0
// console.log(1-'a'); // output will be NaN
// console.log('a'-1); // output will be NaN
// console.log('a'-'a'); // output will be NaN

// // "*" -> This can only perform the arithmatic Multiplication
// console.log(1*1); // output will be 1
// console.log(1*'a'); // output will be NaN
// console.log('a'*1); // output will be NaN
// console.log('a'*'a'); // output will be NaN

// // "/" -> This can only perform the arithmatic Division
// console.log(1/1); // output will be 1
// console.log(1/'a'); // output will be NaN
// console.log('a'/1); // output will be NaN
// console.log('a'/'a'); // output will be NaN


//-----------------------------------------------------------------------------------------
// Type coercion --> Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another (like string to number, boolean to string, etc.) during operations.
// "-" -> This can only perform the arithmatic subtraction
console.log(1-1); // output will be 0
console.log(10-'4'); // output will be 6
console.log('10'-1); // output will be 9
console.log('10'-'5'); // output will be 5

// "*" -> This can only perform the arithmatic Multiplication
console.log(1*1); // output will be 1
console.log(1*'10'); // output will be 10
console.log('5'*20); // output will be 100
console.log('4'*'10'); // output will be 40

// "/" -> This can only perform the arithmatic Division
console.log(1/1); // output will be 1
console.log(10/'5'); // output will be 2
console.log('500'/10); // output will be 5
console.log('300'/'3'); // output will be 100

