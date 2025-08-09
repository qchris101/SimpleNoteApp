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
  <div className="w-full flex font-[400] text-[16px] font-[proxina_soft] justify-center">
   
    <form onSubmit={handleSubmit} className="shadow-xl  rounded-md p-4 my-4 w-full max-w-lg">
      <div className="flex space-x-2 ">
        <input
          type="text"
          value={title}
          placeholder="Note Title..."
          onChange={(e) => setTitle(e.target.value)}
          className="input flex-1 rounded-md  px-4 py-2.5  focus:outline-gray-500"
        />
        <textarea
          type="text"
          value={text}
          placeholder="Start writing..."
          onChange={(e) => setText(e.target.value)}
          className="input-lg flex-1 rounded-md  px-4 py-2.5  focus:outline-gray-500"
        />
        <button 
          type="submit" 
          className=" px-4 py-2.5 text-white rounded-md hover:bg-gray-400"
        >
          <img src="/src/assets/edit.png" alt="Icon" className="w-6 h-6 font-[16px]"/>
        </button>
    
      </div>
    </form>
      <div>

      {error && (
        <div className="flex card pt-2">
          <p className="alert alert-warning">{error}</p>
        </div>
      )}
      </div>
  </div>
)
}
