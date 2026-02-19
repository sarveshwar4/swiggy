import { fireEvent, render, screen, within } from "@testing-library/react";
import Body from "../body";
import { Provider } from "react-redux";
import store from "../../utils/appStore";
import mock_data from "../mock/mockResListData.json";
import { act } from "react";
import { Header } from "../header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantCart from "../RestaurantCart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mock_data);
        }
    })
})


test("should render body component with restaurant card", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Body />
                </Provider>
            </BrowserRouter>)
    )
    const resList = await screen.findAllByTestId("res-card");

    expect(resList.length).toBe(20);
})

test("should render header component with cart-item 1", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                    <Body />
                    <RestaurantCart/>
                </Provider>
            </BrowserRouter>
        );
    });

    const resList = await screen.findAllByTestId("res-card");

    const firstCard = resList[0];
    const button = within(firstCard).getByRole("button", { name: "Add" });

    fireEvent.click(button);

    const cartItem = await screen.getByText("RestaurantCart - 1");

    expect(cartItem).toBeInTheDocument();

   const cartItemList = await screen.getAllByTestId("res-card");

   expect(cartItemList.length).toBe(21);

});

test("should restraunt cart item is rendered", async () => {
    await act(async () =>
        render(
            <Provider store={store}>
                 
            </Provider>
        )
    )
})