import React from "react";
import "./style.css";

//this is just a wrapper to make the cards look contained and uniform
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
