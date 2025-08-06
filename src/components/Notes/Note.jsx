import { useState } from "react"
import NoteEditor from "./NoteEdit"
import useNotes from "../../hooks/useNotes"




export default function Note ({ text, onDelete, onUpdate, id, date, favorite }) {
    
    const [ isEditing, setIsEditing ] = useState(false)
    const { toggleFavorite } = useNotes()
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
            <div className="card w-auto text-black shadow-xl font-[400] text-[16px] border-b-2 border-gray-100 container max-w-4xl mx-auto px-15 py-8 font-[proxima_soft] bg-white">
                <div>
                    <input
                     type="checkbox"
                     checked={favorite}
                     onChange={() => toggleFavorite(id)}
                     className="checkbox border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
                    />
                </div>
                <div className="flex flex-col justify-between h-full min-h-[180px]">
                <p className="text-[18px]">{text}</p>
                    
                <p className="px-2 pt-2 mt-2 text-[14px]">ID: {id}</p>
                <p className="px-2 py-1.5 text-[14px] ">Created On: {date}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => setIsEditing(true)} 
                            className="bg-gray-300 px-4 py-2.5 text-white rounded-md hover:bg-gray-400 font-[400px] text-[16px] m-1">Edit</button>
                        <button onClick={onDelete} 
                            className="border-1 border-gray-300 px-4 py-2.5 text-red-600 rounded-md hover:border-red-300">Trash</button>
                    </div>


                </div>
            </div>
        )}
        </div>
    )
}