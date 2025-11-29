import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import sectionReducer from "./slices/sectionsSlice";

const store = configureStore({
    devTools:true,
    reducer:{
        menu: menuReducer,
        sections: sectionReducer
    }
});

export default store;
