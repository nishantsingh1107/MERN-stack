const parent = document.getElementById("root");

const title1 = document.createElement("h1");
title1.innerText = "Hello From DOM 1";
title1.style.color = "lightblue";
title1.style.textDecoration = "underline";
title1.style.textDecorationColor = "green";
parent.append(title1);


const title2 = document.createElement("h2");
title2.innerText = "Hello From DOM 2";
parent.append(title2);

console.log(parent);