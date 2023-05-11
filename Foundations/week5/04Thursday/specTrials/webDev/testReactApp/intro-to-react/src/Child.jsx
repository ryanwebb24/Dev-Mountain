import React from 'react'

function Child(props) {
    return(
        <div>
            <h2>Child Component</h2>
            <h3>User input: {props.userInput}</h3>
        </div>
    )
}

export default Child