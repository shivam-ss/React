import React from "react";

function fire(){
    console.log("clicked button")
}

function App(){
    return [
        <div className="container">
            <h1> hello</h1>
            <input type="text" placeholder="Your name?" ></input>
            <button onClick={fire()}>Submit</button>
        </div>
    ]
}
export default App;
