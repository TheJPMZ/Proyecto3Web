import React from "react";
import ReactDOM from "react-dom";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LanguageContainer from "./LanguageContainer";
import App from "../App/App";

describe("LanguageContainer", () => {
    it("renders without crashing ReactDOM", () => {
        const div = document.createElement("div");
        ReactDOM.render(<LanguageContainer/>, div);
    });

    it("renders component LanguageContainer correctly", () => {
        render(<LanguageContainer />)
    });

    it('renders all buttons', () => {
        render(<LanguageContainer />)
        const skills = screen.getAllByTestId('testSkills')
        expect(skills.length).toBe(21)
    })
});
