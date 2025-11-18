import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../feacture/lodericonSlice";


const Store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
})
export default Store;