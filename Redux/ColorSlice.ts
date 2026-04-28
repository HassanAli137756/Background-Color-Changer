import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit"

export interface colorStructure
{
    name: string
    id: string
    status: 'permanent' | 'temperarily'
}


export const colorSlice = createSlice(
{
    name: 'colorSlice',
    initialState:
    {
        colors: [
        {
            id: nanoid(),
            name: 'green',
            status: 'permanent'
        },
        {
            id: nanoid(),
            name: 'blue',
            status: 'permanent'
        },
        {
            id: nanoid(),
            name: 'red',
            status: 'permanent'
        }
        ] as colorStructure[]
    },
    reducers:
    {
        addColor: (state, action:PayloadAction<{name: string, status: 'permanent' | 'temperarily'}>) =>
        {
            state.colors.push({...action.payload, id: nanoid()})
        },
        deleteColor: (state, action:PayloadAction<string>) =>
        {
            state.colors = state.colors.filter(clr => clr.id !== action.payload)
        }
    }
}
)


export const {addColor, deleteColor} = colorSlice.actions
export const colorReducer = colorSlice.reducer
