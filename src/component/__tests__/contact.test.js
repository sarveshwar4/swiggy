import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact us page test cases", () => {
    
    test("should load heading inside contact component ", () => {
        render(<Contact />)
        //render on the top of jsdom
        //^^ for rendering this need to set the install the libreary testinglib/jest-dom and add jest.config.js
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument(); // for using this need this "@testing-library/jest-dom"
    });

    test("should load button inside the contact Component", () => {
        render(<Contact />);
        const button = screen.getByRole("button", { name: "Submit" });
        expect(button).toBeInTheDocument();
    });

    test("should load input inside the contact component", () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2);
    });
});

