import { createSlice, type PayloadAction } from "@reduxjs/toolkit"


export interface loginStructure
{
    name: string
    password: string
    email: string
}

let userLoginData:loginStructure = {email: '', name: '', password: ''};
const rawInfo = localStorage.getItem('logindata')

if(rawInfo && rawInfo.length > 0)
{
    userLoginData = JSON.parse(rawInfo) 
}

export const authSlice = createSlice(
{
    name: 'authSlice',

    initialState: 
    {
        userData: userLoginData
    },

    reducers: 
    {
        login: (state, action:PayloadAction<{name: string, email: string, password: string}>) =>
        {
            state.userData = action.payload
            localStorage.setItem('logindata', JSON.stringify(state.userData))
        },
        logout: (state) =>
        {
            state.userData = {name: '', email: '', password: ''}
            localStorage.setItem('logindata', '')
        }
    }
}
)




export const {login, logout} = authSlice.actions
export const authReducer = authSlice.reducer
