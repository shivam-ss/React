import React from "react";
import Login from "./Login";

var isloggedin= false;

function renderCondition(){
    return <div className='container'>{
    isloggedin === true ? <h1> hello </h1> : <Login />
}
</div>
}

function App() {
  return (
    <div className="container">
      {renderCondition()}
    </div>
  );
}

export default App;
