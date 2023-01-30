import React from 'react'

const Practice = (props) => {
    let { user, age } = props.object;
    // console.log("its a component", props.object);
    return (
        <>
            {/* <h1>
                {user}{age}
            </h1> */}

            <h1>
                {user}
            </h1>
            <h2>
                {age}
            </h2>

        </>
    )
}

export default Practice