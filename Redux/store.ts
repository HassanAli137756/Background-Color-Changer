import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./ColorSlice";
import { authReducer } from "./AuthSlice";

export const store = configureStore(
{
    reducer:
    {
        colorReducer: colorReducer,
        authReducer: authReducer
    }
}
)
