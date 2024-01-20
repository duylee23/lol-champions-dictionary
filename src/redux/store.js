import { configureStore } from "@reduxjs/toolkit";
import championsReducer from "./championsSlice";


const store = configureStore({
    reducer: {
        champions: championsReducer
    }
})

export default store 

