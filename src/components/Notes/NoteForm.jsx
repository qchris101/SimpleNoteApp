import { useState } from "react";


export default function NoteForm ({ addNote }) {        

    const [ text, setText ] = useState("")
    const [ error, setError] = useState("")
    

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

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-gray-800 dark:text-gray-200" >
        
        <div>

        <form onSubmit={handleSubmit} className="mb-8 text-black rounded-md">
            <input
            type="text"
            value={text}
            placeholder="Enter a Note"
            onChange={(e) => setText(e.target.value)}
            className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
            />
            <div className="flex items-center justify-end gap-2 p-1.5">
        <button type="submit" className="border 2">Add</button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </form>
        </div>
    </div>
    )
}