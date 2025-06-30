// // console.log("Hello from JS!");

// const { createElement } = require("react");

// /*
// create the following unordered list inside the root Div
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>
// */

// const rootEle = document.getElementById("root");

// const Item1 = document.createElement("li");
// Item1.innerText = "Item 1";

// const Item2 = document.createElement("li");
// Item2.innerText = "Item 2";

// const list = document.createElement("ul");

// list.appendChild(Item1);
// list.appendChild(Item2);
// rootEle.appendChild(list);

// -----------------------------------------------------------------------

// const item1 = React.createElement("li", {}, "Mango");
// console.log(item1);
// const item2 = React.createElement("li", {}, "Banana");
// console.log(item2);
// const list = React.createElement("ol", {}, [item1, item2]);

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);
// reactRoot.render(list);

// -----------------------------------------------------------------------
const item1 = <li>Mango</li>;
const item2 = <li>Banana</li>;
const list = (
    <ul>
        {item1}
        {item2}
    </ul>
);

const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);
reactRoot.render(list);

// ------------------------------------------------------------------------
// const list = (
//     <ul>
//         <li>Mango</li>
//         <li>Banana</li>
//     </ul>
// );

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);
// reactRoot.render(list);