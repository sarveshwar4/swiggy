const {configureStore} = require("@reduxjs/toolkit");
import Restrauntreducer from "./RestaurandCartSlice";
const store = configureStore({
    reducer :{
        resCart : Restrauntreducer,
    }
});

export default store;