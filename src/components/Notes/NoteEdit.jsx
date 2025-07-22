import { useState } from "react";

export default function NoteEditor ({ id, initialText, onSave, onCancel }) {
    const [text, setText] = useState(initialText)

    const handleSave = () => {
        if(text.trim()) {
            onSave(id, text)
        }
    }

    return (
        <div className="flex justify-center container mx-auto px-15 py-8 shadow-xl m-3 rounded-md bg-white font-[400] text-[16px] font-[proxina_soft]">
            <input
                className="flex-1 rounded-md bg-gray-100 px-4 py-2.5 text-gray-700 focus:outline-blue-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="border 2 border-solid m-2 p-1 rounded-md" onClick={handleSave}>Save</button>
            <button className="border 2 border-solid m-2 p-1 rounded-md" onClick={onCancel}>Cancel</button>
        </div>
    )
}