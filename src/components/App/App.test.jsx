import React from "react";
import ReactDOM from "react-dom";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
    it("renders without crashing ReactDOM", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App/>, div);
    });

    it("renders component App correctly", () => {
        render(<App />)
    });
}); 
