import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthService";
import { TodoReducer } from "./TodoSlice";

export const store = configureStore(
{
    reducer:
    {
        authReducer: AuthReducer,
        todoReducer: TodoReducer
    }
}
)
