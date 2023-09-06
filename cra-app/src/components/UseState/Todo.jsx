import { useReducer, useRef } from "react";
// 1. Init state
const initState = {
    job: '',
    jobs: []
}
// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const removeJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}
// 3. Reducer
const reducer = (state, action) => {
    
    let newState;
    switch(action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
            case ADD_JOB:
                newState = {
                    ...state,
                    jobs: [...state.jobs, action.payload]
                }
                break
            case DELETE_JOB:
                const newJob = [...state.jobs]
                newJob.splice(action.payload, 1)
                newState = {
                    ...state,
                    jobs: newJob
                }
                break
        default:
            throw new Error("Invalid action")   
    }
    
    return newState;
}
// 4. Dispatch

function Todo() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const inputRef = useRef()
    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));

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
                            value={job}
                            placeholder="Enter todo..."
                            onChange={(e) => dispatch(setJob(e.target.value))}
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
                            jobs.map((job, index) => (
                                <li key={index} className="list-group-item list-group-item-info 
                                    d-flex align-items-center justify-content-between mt-1">
                                    {job}
                                        <div>
                                            <i role="button" className="fa fa-trash me-2"
                                                onClick={() => dispatch(removeJob(index))}
                                            />
                                        </div>    
                                </li>
                            )) 
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Todo