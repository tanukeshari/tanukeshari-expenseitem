import React from "react";

const card=(props)=>{
    const classes='card' +props.className;

    return<div> className={classes}{props.children}</div>
}

export default card;