import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlice";
import userReducer from "../pages/Auth/userSlice"

export const store = configureStore({
    reducer: {
        // counter : counterReducer,
        user : userReducer,
        // cart : cartReducer,
    },
})