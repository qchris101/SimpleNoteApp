import Note from "./Note";
export default function NoteList ({ notes, onDelete, onUpdate }) {
    
    if (notes.length === 0) {
        return<p>No notes yet!</p>
    }

    return (
        <div className="w-full resize-none focus:ring-0 text-[16px] my-10">
            {/* <p>Recent</p> */}
            {notes.map((note) => (
                <Note
                key={note.id}
                text={note.text}
                id={note.id}
                date={note.date}
                onUpdate={onUpdate}
                onDelete={ () => onDelete(note.id) }
                />
            ))}
        </div>
    )   
}
