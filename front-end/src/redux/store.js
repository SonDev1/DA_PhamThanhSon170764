import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/Auth/userSlice";

export const store = configureStore({
    reducer: {
        user : userReducer,
        // cart : cartReducer,
    },
})