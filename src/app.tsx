import React from "react";
import ReactDOM from "react-dom";
import LoginScreen from "./LoginScreen";

ReactDOM.render(<LoginScreen handleSubmit={value => console.log(value)} />, document.getElementById("root"));
