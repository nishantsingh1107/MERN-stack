// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const card1 = (
//     <div className="card">
//         <h1>Invitation</h1>
//         <p>Discription1</p>
//     </div>
// );

// const card2 = (
//     <div className="card">
//         <h1>Warning</h1>
//         <p>Discription2</p>
//     </div>
// );

// const card3 = (
//     <div className="card">
//         <h1>Notification</h1>
//         <p>Discriptio3</p>
//     </div>
// );

// const container = (
//     <div>
//         {card1}
//         {card2}
//         {card3}
//     </div>
// );

// reactRoot.render(container);

// ---------------------------------------------------------------
// const domRoot = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(domRoot);

// const card = (title) => {
//     return (
//         <div className="card">
//             <h1>{title}</h1>
//             <p>description</p>
//         </div>
//     );
// };

// const container = (
//     <div>
//         {card("Hello!!")}
//         {card("Notification")}
//         {card("Warning!")}
//     </div>
// );

// reactRoot.render(container);


// ---------------------------------------------------------------
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const Card = (obj) => {
    return (
        <div className="card">
            <h1>{obj.title}</h1>
            <p>description</p>
        </div>
    );
};

const Card2 = (
    <div className="card">
        <h1>---Done---</h1>
        <p>description</p>
    </div>
);

const container = (
    <div>
        {Card({ title: "Hello!!" })}
        <Card title="Notification"></Card>
        {Card({ title: "Warning!" })}
        {Card2}
    </div>
);

reactRoot.render(container);