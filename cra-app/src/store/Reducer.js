import { ADD_TODO, REMOVE_TODO, SET_TODO_INPUT, SET_TODO_EDIT, SET_CONTENT, UPDATE_TODO } from "./Constants"

const initState = {
    todos: [
    {
        id: 1,
        content: 'Quét nhà',
    },
    {
        id: 2,
        content: 'Giặt quần áo',
    }
],
    todoInput: '',
    todoEdit: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            let maxId = state.todos.reduce((max, item) => {
                return item.id > max ? item.id : max
            }, 0)
            let newTodo = {
                id: maxId + 1,
                content: action.payload
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case REMOVE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            
            return {
                ...state,
                todos: newTodos
            }
        case SET_TODO_EDIT:
            const idEdit = state.todos.findIndex(todo => todo.id === action.payload)
            const todoEdit = {...state.todos[idEdit]}
            return {
                ...state,
                todoEdit
            }
        case SET_CONTENT:
            return {
                ...state,
                todoEdit: {
                    ...state.todoEdit,
                    content: action.payload
                }
            }
        case UPDATE_TODO:
            const todosUpdate = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo = action.payload
                }
                return todo;
            } )
            return {
                ...state,
                todos: todosUpdate,
                todoEdit: null
            }
        default:
            throw new Error('Invalid Action')
        
    }
}

export {initState}
export default reducer

