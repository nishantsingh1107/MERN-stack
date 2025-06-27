// import { useState } from "react";
// const arr = ["kiwi", "banana", "pineapple"];
// const App = () => {
//     const [editIndex, setEditIndex] = useState(-1);
//     console.log("🟡 : editIndex:", editIndex);
//     return (
//         <div>
//             {arr.map((elem, idx) => {
//                 return (
//                     <div style={{ backgroundColor: idx === editIndex ? "red" : "green" }}>
//                         <button
//                             onClick={() => {
//                                 setEditIndex(idx);
//                             }}
//                         >
//                             Edit
//                         </button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
// export default App;
// // {idx === editIndex ? <input type="text" /> : <h1>{elem}</h1>}


import { useState } from "react";

const FRUITS = [
    {
        name: "Kiwi",
        color: "green",
        price: 600,
    },
    {
        name: "Banana",
        color: "yellow",
        price: 40,
    },
    {
        name: "Apple",
        color: "red",
        price: 200,
    },
    {
        name: "Mango",
        color: "yellow",
        price: 150,
    },
];

const App = () => {
    const [editIndex, setEditIndex] = useState(-1);
    const [fruits, setFruits] = useState(FRUITS);

    const handleSubmit = (e, idx) => {
        e.preventDefault();
        setFruits((prev) => {
            const temp = [...prev];
            temp[idx].name = e.target.fruitName.value;
            return temp;
        });
        setEditIndex(-1);
    };

    const handleAddFruit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const color = e.target.color.value;
        const price = Number(e.target.price.value);

        if(!name || !color || !price) return;

        setFruits((prev) => {
            const temp = [...prev,{ name, color , price}];
            return temp;
        });
        e.target.reset();
   };

    const handleDelete = (idx) => {
        setFruits((prev) => {
            const temp = [...prev];
            temp.splice(idx, 1);
            return temp;
        });
    };

     return (
    <div className="container">
      <h2>Fruit List</h2>
      {fruits.map((elem, idx) => (
        <div key={idx} className="fruit-card">
          {editIndex !== idx ? (
            <>
              <h4>{elem.name}</h4>
              <h4>{elem.color}</h4>
              <h4>₹{elem.price}</h4>
              <button onClick={() => setEditIndex(idx)}>Edit</button>
              <button onClick={() => handleDelete(idx)} style={{ backgroundColor: "crimson" }}>
                Delete
              </button>
            </>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, idx)} onReset={() => setEditIndex(-1)}>
              <input type="text" name="fruitName" defaultValue={elem.name} required />
              <button type="submit">Update</button>
              <button type="reset">Cancel</button>
            </form>
          )}
        </div>
      ))}

      <h2>Add New Fruit</h2>
      <form onSubmit={handleAddFruit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="color" placeholder="Color" required />
        <input type="number" name="price" placeholder="Price" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;

// {idx === editIndex ? <input type="text" /> : <h1>{elem}</h1>}