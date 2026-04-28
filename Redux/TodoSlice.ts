import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface TodoStructure
{
    task: string
    id: string
    isCompleted: boolean
    isReadOnly: boolean
}

export const todoSlice = createSlice(
{
    name: 'todoSlice',
    initialState:
    {
        todos: [] as TodoStructure[]
    },
    reducers:
    {
        addTodo: (state, action:PayloadAction<string>) =>
        {

            state.todos.push({id: nanoid(), isCompleted: false, isReadOnly: true, task: action.payload})

        },

        deleteTodo: (state, action:PayloadAction<string>) =>
        {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        eidit: (state, action:PayloadAction<{id: string, newText?: string }>) =>
        {
            state.todos = state.todos.map(todo =>
            {
            if(todo.id == action.payload.id)
            {

                
                if(action.payload.newText && action.payload.newText.length > 0)
                {
                    return ({...todo, isReadOnly: true, task: action.payload.newText})                
                }
                else return {...todo, isReadOnly: !todo.isReadOnly}
            }
            else return todo
            }
            )
        },

        toggleCompleted: (state, action:PayloadAction<{id: string, isReadOnly: boolean, newText?: string}>) =>
        {
            state.todos = state.todos.map(todo => 
            {
                if(action.payload.id == todo.id)
                {
                    if(action.payload.isReadOnly && action.payload.newText && action.payload.newText.length > 0)
                    {
                        return {...todo, task: action.payload.newText, isCompleted: true}
                    }
                    else return {...todo, isCompleted: !todo.isCompleted}
                }
                else return todo
            }
            )
        }
    }
}
)


export const {addTodo, deleteTodo, eidit, toggleCompleted} = todoSlice.actions
export const TodoReducer = todoSlice.reducer
