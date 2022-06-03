import React from "react";
import ReactDOM from "react-dom";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PageContainer from "./PageContainer";

describe("PageContainer", () => {
    it("renders without crashing ReactDOM", () => {
        const div = document.createElement("div");
        ReactDOM.render(<PageContainer/>, div);
    });

    it("renders component PageContainer correctly", () => {
        render(<PageContainer />)
    });
});
