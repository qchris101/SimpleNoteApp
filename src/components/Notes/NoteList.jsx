import Note from "./Note";
export default function NoteList ({ notes, onDelete, onUpdate }) {

    if (notes === 0) {
        return<p>No notes yet!</p>
    }

    return (
        <div className="w-full resize-none border-none focus:ring-0 text-[16px]">
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