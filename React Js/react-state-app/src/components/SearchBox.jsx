// Re-rendering --> re.cunning the function again.
// Component is re-rendered only when the state changes or props change
// State variables are the variables given to us by react if the value of the state variable change ----> this means state of the component has changed

import { useState } from "react";

const SearchBox = () => {
    // let searchText = "Anuj";
    const [moniter, remote] =  useState();
    const handleSearch = (e) => {
        // searchText = e.target.value;
        // console.log(searchText);
        remote(e.target.value); // React says ---> Noted!!
        console.log(moniter); // It will show the output in the console
    }

    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            <h3>{moniter}</h3>
        </div>
    );
};

export { SearchBox };