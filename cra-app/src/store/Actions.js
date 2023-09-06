import { ADD_TODO, REMOVE_TODO, SET_CONTENT, SET_TODO_EDIT, SET_TODO_INPUT, UPDATE_TODO } from "./Constants"

export const setTodoInput = (payload) => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const removeJob = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}

export const setTodoEdit = (payload) => {
    return {
        type: SET_TODO_EDIT,
        payload
    }
}

export const setContent = (payload) => {
    return {
        type: SET_CONTENT,
        payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
}

