import { useState } from "react";

export default function NoteEditor ({ id, initialText, initialTitle, onSave, onCancel }) {
    const [text, setText] = useState(initialText)
    const [title, setTitle] = useState(initialTitle)

    const handleSave = () => {
        if(text.trim()) {
            onSave(id, text,title)
        }
    }

    return (
        <div className="flex justify-center flex-col container max-w-4xl mx-auto px-15 py-8 shadow-xl m-3 rounded-md bg-white font-[400] text-[16px] font-[proxina_soft] ">
            <input
                className="input rounded-md h-full w-full max-h-[40px]  px-4 py-2.5  focus:outline-gray-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="input-md rounded-lg h-full min-h-[200px] w-full  px-4 mt-2 py-2.5 border focus:outline-gray-500"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="card-actions justify-end mt-2">  
                <button className="btn" onClick={handleSave}>Save</button>
                <button className="btn" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    )
}