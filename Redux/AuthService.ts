import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface LoginStructure
{
    name: string
    password: string
    email: string
}

let rawData: string = localStorage.getItem('loginInfo') as string
let loginData:LoginStructure = {email: '', name: '', password: ''}

if(rawData && rawData.length > 0)
{
    loginData = JSON.parse(localStorage.getItem('loginInfo') as string)
}

export const AuthSlice = createSlice(
{
    name: 'AuthSlice',
    initialState:
    {
        userLoginData: loginData
    },
    reducers:
    {
        login: (state, action:PayloadAction<LoginStructure>) =>
        {
            state.userLoginData = action.payload
            localStorage.setItem('loginInfo' , JSON.stringify(action.payload))
        },
        logout: (state) =>
        {
            state.userLoginData = {email: '', name: '', password: ''}
            localStorage.setItem('loginInfo', '')
        }
    }
}
)


export const {login, logout} = AuthSlice.actions
export const AuthReducer = AuthSlice.reducer
