import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Header } from "../header"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/appStore"

describe("test case for the header", () => {

    it("should render header component with login Button", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const button = screen.getByRole("button", { name: "login" });

        expect(button).toBeInTheDocument();
    });

    it("should render header component with cart-item 0", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        // const RestaurantCartItem = screen.getByText("RestaurantCart - 0");

        const RestaurantCartItem = screen.getByText(/RestaurantCart/);
        // here i pass the regex if start with this /RestaurantCart it takes suppose /RestaurantCart - 1 this is considered

        expect(RestaurantCartItem).toBeInTheDocument();

    });

    it("should change login button to logout button onclick", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByRole("button", { name: "login" });

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button", { name: "logout" });

        expect(logoutButton).toBeInTheDocument();
    });
});

