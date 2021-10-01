import React from "react";
import './App.css';
import rerender from "./index";

let count = 0;
let incrementCounter = () => {
    count++
    rerender(Counter(), document.getElementById('root'));
};
const Counter = () =>
    (
        <div className="App">
            <header className="App-header">
                {count}
                <button onClick={incrementCounter}>Click</button>
            </header>
        </div>
    );
export default Counter;
