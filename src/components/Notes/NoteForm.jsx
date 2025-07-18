import { useState } from "react";

// This File will create the Form to enter our notes
// We will then take the input and save it in this components own state
// addNote gets passed a prop we set up addNote in the app file
// Line 13 of app file:
    // const addNote = (text) => {
    //      setNotes( [...notes, {id: Date,now(), text}])
    //    }
    // This creates a new array to hold our notes tagged with id and our text(input)

export default function NoteForm ({ addNote }) {        
    // the text is passed as state so it can handle multiple changes
    const [ text, setText ] = useState("")
    const [ error, setError] = useState("")
    
    // We create a handleSubmit function to handle our data.
    // addNote(text) is our current state (whats typed into our input tag)
    // which gets called in Line 13 of App.jsx
    // set our state back to an empty string
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) {
            setError("Please enter a note!")
            return
        }
        addNote(text)
        setText('')
        setError('')
    }
    // here we return our form now with our added functions to handle the submit
    // alongside to get out value via the text state
    // the state is changed every time with the users keystrokes
    // lastly when button is pressed to submit whatever is in the text box gets 
    // added to addNote -> then setText(state) is set back to empty
    return (
        <div className="flex justify-center ">

        <form onSubmit={handleSubmit} className="max-w-sm md:max-w-lg border 2 mb-8 dark:text-gray-400">
            <input
            type="text"
            value={text}
            placeholder="Note"
            onChange={(e) => setText(e.target.value)}
            className="flex-grow border 2"
            />
        <button type="submit" className="min-w-12 border 2 border-solid">Add</button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
        </div>
    )
}