// Code Keypad Component Here
import React from 'react';

function handleChange (e) {
    console.log("Entering password...")
}

function Keypad () {
    return (
        <div>
            <h1>Keypad</h1>
            <input 
                type="password" 
                onChange={handleChange}
            />
        </div>
    )
}

export default Keypad;