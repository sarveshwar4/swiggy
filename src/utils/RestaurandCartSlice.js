import { createSlice } from "@reduxjs/toolkit";

const restaurantCartSlice = createSlice({
    name : "restaurantCart",
    initialState : {
        items : []
    },
    reducers:{
        addItem : (state, action) =>{
            state.items.push(action.payload);
        },

        removeItem : (state, action) =>{
              state.items.pop();    
        },

        clearItem : (state, action) =>{
            state.items.length = 0;
        }
    }
});

console.log("hello ji",restaurantCartSlice);

export const {addItem, removeItem, clearItem} = restaurantCartSlice.actions;

export default restaurantCartSlice.reducer;