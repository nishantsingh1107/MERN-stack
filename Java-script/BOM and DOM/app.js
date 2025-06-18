// console.log(window.document);
// console.dir(window.document.children[0].children[2].children[0].innerHTML);

// const headings = document.getElementsByTagName("h3");
// console.log(headings);

// const header = document.getElementsByTagName("header");
// console.log(header);

// const anchor = document.getElementsByTagName("a");
// console.log(anchor);

// headings[0].innerText = "Hello Nishant";
// headings[1].innerText = "Hello World!!!";


// --------------------------------------------------------------------
// const elements = document.getElementsByClassName("text-brown");
// console.log(elements);

// elements[0].style.color = "brown";
// elements[1].style.color = "brown";


// --------------------------------------------------------------------
// const text = document.getElementById('text-1');
// text.style.backgroundColor = "lightblue";


// --------------------------------------------------------------------
// 4. document.querySelectorAll ---> [] (NODE List)
// const titles = document.querySelectorAll("h3");
// console.log(titles);

// const textBrownElements = document.querySelectorAll(".text-brown"); // Corrected: removed space before hyphen
// console.log(textBrownElements);

// const textParas = document.querySelectorAll("#text-1");
// console.log(textParas);

// --------------------------------------------------------------------
// 5. document.querySelector ---> element or null
const titles = document.querySelector("h3");
console.log(titles);

const textBrownElements = document.querySelector(".text-brown"); // Corrected: removed space before hyphen
console.log(textBrownElements);

const textPara = document.querySelector("#text-1");
console.log(textPara);