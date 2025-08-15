import { useState } from "react";


export default function NoteForm ({ addNote }) {        

    const [ text, setText ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ error, setError] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim() || !title.trim()) {
            setError("Please enter a note!")
            return
        }
        addNote(title, text)
        setText('')
        setTitle('')
        setError('')
    }
return (
  <div className="w-full min-w-[200px] rounded-lg  flex justify-center">
   
    <form 
      onSubmit={handleSubmit} 
      className=" flex flex-col items-center shadow-xl  rounded-md p-4 my-4 w-full max-w-lg">
          <input
            type="text"
            value={title}
            placeholder="Note Title..."
            onChange={(e) => setTitle(e.target.value)}
            className="input rounded-md h-full w-full max-h-[40px]  px-4 py-2.5  focus:outline-gray-500"
          />
          <textarea
            type="text"
            value={text}
            placeholder="Start writing..."
            onChange={(e) => setText(e.target.value)}
            className="input-md rounded-lg h-full min-h-[200px] w-full  px-4 mt-2 py-2.5  focus:outline-gray-500"
          />
        <button 
          type="submit" 
          className="  px-4 py-2.5 text-white rounded-md hover:bg-gray-400">
          <img src="/src/assets/edit.png" alt="Icon" className="w-6 h-6 font-[16px]"/>
        </button>
    </form>
      <div>

      {error && (
        <div className="flex card">
          <p className="alert alert-warning">{error}</p>
        </div>
      )}
      </div>
  </div>
)
}
