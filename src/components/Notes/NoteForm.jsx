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
  <div className="w-full flex font-[400] text-[16px] font-[proxina_soft] justify-center">
    <form onSubmit={handleSubmit} className="rounded-md p-4 w-full max-w-lg bg-white">
      <div className="flex space-x-2">
        <input
          type="text"
          value={text}
          placeholder="Enter a Note"
          onChange={(e) => setText(e.target.value)}
          className="flex-1 rounded-md bg-gray-200 px-4 py-2.5 text-gray-700 focus:outline-blue-500"
        />
        <button 
          type="submit" 
          className="bg-blue-500 px-4 py-2.5 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      
      {error && (
        <div className="flex justify-end pt-2">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}
    </form>
  </div>
)
}
