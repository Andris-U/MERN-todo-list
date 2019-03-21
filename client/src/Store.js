import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';

export const Store = createContext();

const initialState = {
    todos: [],
    modalShow: false
};

function reducer(state, action) {
    switch(action.type) {
        case 'TOGGLE_CHECKED':
            return { ...state, todos: state.todos.map(todo => {
                return todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo;
            })};
        case 'ADD_TODO':
            const newTodo = { id: uuid(), text: action.payload, checked: false };

            return { ...state, todos: state.todos.concat(newTodo) };
        case 'DELETE_TODO':
            const newTodos = state.todos.filter(todo => todo.id !== action.payload);

            return { ...state, todos: newTodos };
        case 'PULL_TODOS':
            return { ...state, todos: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            { props.children }
        </Store.Provider>
    )
}