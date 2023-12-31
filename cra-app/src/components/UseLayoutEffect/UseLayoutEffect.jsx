import React, { useEffect, useLayoutEffect, useState } from "react";

/* 
    UseEffect
    1. Cập nhập lại state
    2. Cập nhập lại DOM (mutated)
    3. Render lại UI
    4. Gọi cleanup nếu deps thay đổi
    5. Gọi UseEffect callback

    UseLayoutEffect
    1. Cập nhập lại state
    2. Cập nhập lại DOM (mutated)
    3. Gọi cleanup nếu deps thay đổi (sync)
    4. Gọi UseLayoutEffect callback (sync)
    5. Render lại UI
*/

function UseLayoutEffect() {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
        if( count > 3) {
            setCount(0)
        }
    },[count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default UseLayoutEffect