import { useState } from "react";

export default function NoteEditor ({ id, initialText, onSave, onCancel }) {
    const [text, setText] = useState(initialText)

    const handleSave = () => {
        if(text.trim()) {
            onSave(id, text)
        }
    }

    return (
        <div className="flex justify-center container max-w-4xl mx-auto px-15 py-8 shadow-xl m-3 rounded-md bg-white font-[400] text-[16px] font-[proxina_soft] ">
            <textarea
                className=" textarea-xl flex-1 rounded-md  bg-gray-100 px-4 py-2.5 text-gray-700 focus:outline-blue-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="card-actions">  

            <button className="btn border-1 border-gray-300 px-4 py-2.5 m-1 text-green-600 rounded-md hover:border-green-400" onClick={handleSave}>Save</button>
            <button className="btn border-1 border-gray-300 px-4 py-2.5 m-1 text-red-600 rounded-md hover:border-red-300" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}