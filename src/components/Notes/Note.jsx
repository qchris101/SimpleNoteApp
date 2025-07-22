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
            <div className="text-black font-[400] text-[16px] container mx-auto px-15 py-8 border 2 shadow-xl m-3 rounded-md font-[proxima_soft] bg-white">
                <p className="font-[proxima_soft]">{text}</p>
                <p className="font-[proxima_soft]">ID: {id}</p>
                <p className="font-[proxima_soft]">Created On: {date}</p>
                <div>
                    <button onClick={() => setIsEditing(true)} 
                    className="border 2 border-solid m-2 px-4 py-0.5 rounded-full font-[proxima_soft]">Edit</button>
                    <button onClick={() => onDelete(id)} 
                    className="border 2 border-solid m-2 px-4 py-0.5 rounded-full font-[proxima_soft]">Delete</button>
                </div>
            </div>
        )}
        </div>
    )
}