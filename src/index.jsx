import "./styles/main.scss";
import * as React from "react";
import {render} from "react-dom";
import {routes as Routes} from "./routes";

window.React = React;
render(
    <Routes/>,document.getElementById("react-container")
);