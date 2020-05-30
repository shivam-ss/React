import React from "react";

import Input from "./Input"

function Login(){
    return <div>
        <form className="form">
            <Input type="text" placeholder='Username' />
            <Input type='password' placeholder="passsword" />
            <Input type="submit" placeholder='SUBMIT' />
        </form>
    </div>
}

export default Login;