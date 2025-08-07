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
            <div className="card w-auto  flex justify-center shadow-xl font-[400] text-[16px]  container max-w-4xl mx-auto px-15 py-8 font-[proxima_soft]">
                <div className="p-1 flex justify-end">
                    <input
                     type="checkbox"
                     checked={favorite}
                     onChange={() => toggleFavorite(id)}
                     className=" checkbox border-indigo-600 bg-gray-500 checked:border-yellow-500 checked:bg-yellow-400 checked:text-orange-800"
                    />
                </div>
                <div className="flex flex-col justify-between h-full min-h-[180px]">
                     <p className="text-[18px]">{text}</p>
                    <div className>
                     <p className="px-2 pt-2 mt-2 text-[14px]">ID: {id}</p>
                     <p className="px-2 py-1.5 text-[14px] ">Created On: {date}</p>

                    </div>

                    <div className="card-actions justify-end">
                        <button onClick={() => setIsEditing(true)} 
                            className="btn btn-soft">Edit</button>
                        <button onClick={onDelete} 
                            className="btn btn-soft">Trash</button>
                    </div>


                </div>
            </div>
        )}
        </div>
    )
}