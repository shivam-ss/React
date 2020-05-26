//creating a footer element to store year and copyright


import React from "react";

const currdate=new Date();
const curryear=currdate.getFullYear();



function Footer(){
    return <p>

      Copyright {curryear};

    </p>
        
}

export default Footer;