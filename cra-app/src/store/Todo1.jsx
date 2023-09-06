// import { useContext } from "react"
// import { StoreContex } from "."
import { useRef } from "react";
import { actions, useStore } from ".";

function Todo1() {
    // const {state, dispatch} = useContext(StoreContex)
    const { state, dispatch } = useStore()
    const { todos, todoInput, todoEdit } = state
    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))

        inputRef.current.focus()
    }
    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-begin">
                <div className="col-sm-6">
                    <h1 className="text-primary alert alert-warning text-center">Todo List</h1>
                    <div className="d-flex col-12">
                        <input type="text" className="form-control me-2"
                            ref={inputRef}
                            value={todoInput}
                            placeholder="Enter todo..."
                            onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
                        />
                        <button className="btn btn-sm btn-warning col-sm-2"
                            onClick={handleSubmit}
                        >
                            <i className="fa fa-plus me-2"></i>
                            Add
                        </button>
                    </div>
                </div>
                <div className="col-sm-6 mt-3">
                    <ul className="list-group">
                        {
                            todos?.map((todo, index) => (
                                <li key={todo.id} className="list-group-item list-group-item-info 
                                    d-flex align-items-center justify-content-between mt-1">
                                    {
                                        (todoEdit && todoEdit.id === todo.id) ? (
                                            <>
                                                <input type="text" className="form-control w-75"
                                                    value={todoEdit.content || todo.content}
                                                    onInput={(e) => dispatch(actions.setContent(e.target.value))}
                                                />
                                                <div>
                                                    <i className="fa fa-save text-success me-2"
                                                        onClick={() => dispatch(actions.updateTodo(todoEdit || todo))}
                                                    />
                                                    <i className="fa fa-times text-warning"
                                                        onClick={() => dispatch(actions.setTodoEdit(null))}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <span>{todo.id}. {todo.content}</span>
                                                <div>
                                                    <i role="button" className="fa fa-trash me-2"
                                                        onClick={() => dispatch(actions.removeJob(index))}
                                                    />
                                                    <i role="button" className="fa fa-edit"
                                                        onClick={() => dispatch(actions.setTodoEdit(todo.id))}
                                                    />
                                                </div>
                                            </>
                                        )
                                    }

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo1