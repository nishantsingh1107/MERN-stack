// const arr = ["cat", "dog", "elephant", "tiger"];
// for(let i=0;i<arr.length;i++){
//     const ele = arr[i];
//     console.log(ele, i);
// }


// const arr = ["cat", "dog", "elephant", "tiger"];
// for(let i in arr){
//     const ele = arr[i];
//     console.log(ele, i);
// }


// const arr = ["cat", "dog", "elephant", "tiger"];
// for(let i of arr){
//     console.log(i);
// }


const arr = ["cat", "dog", "elephant", "tiger"];
const myFunc = (value) =>{
    console.log(value);
}
arr.forEach(myFunc);
