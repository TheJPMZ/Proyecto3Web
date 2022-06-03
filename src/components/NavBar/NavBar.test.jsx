import React from "react";
import ReactDOM from "react-dom";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

describe("NavBar", () => {
    it("renders without crashing ReactDOM", () => {
        const div = document.createElement("div");
        ReactDOM.render(<NavBar/>, div);
    });

    it("renders component NavBar correctly", () => {
        render(<NavBar />)
    });
}); 
