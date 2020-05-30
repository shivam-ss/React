import React from "react";

function App(){
    const [count, set_count]=React.useState(0);
    
    function increase(){
        set_count(count+1);
    }
    function decrease(){
        set_count(count-1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}> Click me </button>
            <button onClick={decrease}> Click me </button>
        </div>
    )
}

export default App;