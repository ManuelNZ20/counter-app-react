import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Hola Mundo" subTitle={'Soy un subtítulo'}/>
    {/* <CounterApp
            value={1}
        > 
        </CounterApp>
        */}
  </React.StrictMode>
);
