import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Body from "../body";
import MOCK_DATA from "../mock/mockResListData.json"
import { act } from "react";
import { Provider } from "react-redux";
import store from "../../utils/appStore";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should search res-list for burger text input", async () => {
    await act(() => render(
        <Provider store={store}>
            <Body />
        </Provider>));
    const Searchbutton = screen.getByTestId("searchBtn");

    const beforeSearchText = screen.getAllByTestId("res-card");

    expect(beforeSearchText.length).toBe(20);

    const searchInput = screen.getByTestId("inputBox");
    
    fireEvent.change(searchInput, {target : {value : "burger"}});

    fireEvent.click(Searchbutton);

    const afterSearchText = screen.getAllByTestId("res-card");

    expect(afterSearchText.length).toBe(2);

});

it("should load top rated restraunts", async() =>{
    await act(() => render(
    <Provider store = {store}>
        <Body/>
     </Provider>));

    const topRatedButton = screen.getByTestId("topRatedButton");
    
    fireEvent.click(topRatedButton);
    
    const restrauntList = screen.getAllByTestId("res-card");

    expect(restrauntList.length).toBe(19);
});