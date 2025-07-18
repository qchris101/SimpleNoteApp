// import { useState } from "react"



export default function MyButton() {

    function handleClick(){
        alert("You clicked me")
    }

    return (

        <button onClick={handleClick} className="bg-blue-950 hover:bg-blue-600 border-2 border-solid">
            I'm a button
        </button>
    )
}

