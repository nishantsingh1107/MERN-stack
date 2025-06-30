const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
    {
        name: "Prabjyot",
        score: 29,
    },
    {
        name: "Rakesh",
        score: 21,
    },
    {
        name: "Mohan",
        score: 16,
    },
    {
        name: "Anurag",
        score: 39,
    },
    {
        name: "Priyanshu",
        score: 47,
    },
];

const Card = (props) => {
    const { name, score } = props;
    return (
        <div className="card">
            <h3 style={{ color: "darkred" }}>{name}</h3>
            <p>{score}</p>
        </div>
    );
};

const App = () => {
    return (
        <div className="parent">
            {arr.map((elem) => {
                return <Card name={elem.name} score={elem.score} />
            })}
        </div>
    );
};

// reactRoot.render(App());
reactRoot.render(<App />);