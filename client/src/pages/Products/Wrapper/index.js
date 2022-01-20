import React from "react";
import "./style.css";
//this wrapper helps keep the product cards streamlined and neat
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
