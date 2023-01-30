import React, { useState } from 'react'

function Hook() {
    let [count, setCount] = useState(0)

    return (
        <>

            <h1 style={{ textAlign: "center" }}>{count}</h1>
            <button style={{ marginLeft: "550px", cursor: "pointer" }} onClick={() => setCount(count + 1)}>increase</button>
            <button style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => setCount(count - 1)}>Decrease</button>

        </>
    )
}

export default Hook