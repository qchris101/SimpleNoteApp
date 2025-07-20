import { useState } from "react"
import NoteEditor from "./NoteEdit"




export default function Note ({ text, onDelete, onUpdate, id, date }) {
    
    const [ isEditing, setIsEditing ] = useState(false)
    
    return (
        <div>
            {isEditing ? (
                <NoteEditor
                id={id}
                initialText={text}
                onSave={(id, newText) => {
                    onUpdate(id, newText)
                    setIsEditing(false)
                }}
                onCancel={() => setIsEditing(false)}
                />
            ) : (
            <div className="container mx-auto px-15 py-8 border 2 shadow-xl m-3 rounded-md">
                <p className="font-serif">{text}</p>
                <p className="font-serif">ID: {id}</p>
                <p className="font-serif">Created On: {date}</p>
                <div>
                    <button onClick={() => setIsEditing(true)} className="border 2 border-solid m-2 px-4 rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Edit</button>
                    <button onClick={() => onDelete(id)} className="border 2 border-solid m-2 px-4 rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Delete</button>
                </div>
            </div>
        )}
        </div>
    )
}