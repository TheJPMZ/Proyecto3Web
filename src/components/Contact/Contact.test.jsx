import React from "react";
import ReactDOM from "react-dom";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "./Contact";

describe("Contact", () => {
    it("renders without crashing ReactDOM", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Contact/>, div);
    });

    it("renders component Contact correctly", () => {
        render(<Contact/>)
    });
});
