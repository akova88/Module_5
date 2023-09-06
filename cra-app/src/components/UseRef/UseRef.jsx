import React, { useEffect, useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(60)
    const timeId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart= () => {
        timeId.current = setInterval(() => {
            
            setCount(prev => prev - 1)
        }, 1000)
        console.log('Star ->', timeId.current);
    }

    const handleStop= () => {
        clearInterval(timeId.current)

        console.log('Stop ->', timeId.current);

    }

    console.log(count, prevCount.current);
    return (
        <div style={{ padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRef