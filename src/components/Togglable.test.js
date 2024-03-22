import React from "react";
import "@testing-library/jest-dom";
import { prettyDOM, render, screen } from "@testing-library/react";
import Togglable from "./Togglable";

describe("<Togglable />", () => {

    test("renders its children", () => {
        render(
            <Togglable buttonLabel="show">
                <div>testDivContent</div>
            </Togglable>
        );
        expect(screen.getByText("testDivContent")).toBeDefined();
    });

    test("at start the children are not displayed", () => {
        render(
            <Togglable buttonLabel="show">
                <div>testDivContent</div>
            </Togglable>
        );

        const button = screen.getByRole('button');
        console.log(prettyDOM(button));
        expect(button).toHaveTextContent('show');
    });

    test("after clicking the button, children are displayed", () => {
        render(
            <Togglable buttonLabel="show">
                <div>testDivContent</div>
            </Togglable>
        );

        const button = screen.getByRole('button');
        button.click();
        console.log(prettyDOM(button));
        const div = screen.getByText("testDivContent");
        expect(div).toBeDefined();
    });
});