import React, { Component } from "react";

function Button(props) {
  return (
    <React.Fragment>
    
      <button onClick={() => props.handleClickFunction()} id={props.cssid}>
        {props.buttonName}
      </button>
    </React.Fragment>
  );
}

 
 export default Button
 