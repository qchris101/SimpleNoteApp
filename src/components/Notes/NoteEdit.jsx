import { useState } from "react";

export default function NoteEditor ({ id, initialText, onSave, onCancel }) {
    const [text, setText] = useState(initialText)

    const handleSave = () => {
        if(text.trim()) {
            onSave(id, text)
        }
    }

    return (
        <div className="flex justify-center w-full border 4 rounded-md resize-none focus:ring-0 md:text-md text-white">
            <input
                className="border 2 p-1 rounded-s"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="border 2 border-solid m-2 p-1 rounded-md" onClick={handleSave}>Save</button>
            <button className="border 2 border-solid m-2 p-1 rounded-md" onClick={onCancel}>Cancel</button>
        </div>
    )
}