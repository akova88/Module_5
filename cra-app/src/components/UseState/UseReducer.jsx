import { useReducer } from "react";

// 1. Init state
// 2. Action: up (state +1)/ down(state -1)
// 3. Reducer
// 4. Dispatch

const initState = 0;
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state -1;
        default:
            throw new Error('Invalid action')
    }
}

function Reducer() {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div className="mt-3 ms-3">
            <h1>{count}</h1>
        <button className="btn btn-warning"
            onClick={() => dispatch(DOWN_ACTION)}
        >DOWN</button>
        <button className="btn btn-success"
            onClick={() => dispatch(UP_ACTION)}
        >UP</button>
        </div>
        
    )
}

export default Reducer