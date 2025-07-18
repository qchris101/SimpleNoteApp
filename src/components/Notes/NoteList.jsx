import Note from "./Note";
export default function NoteList ({ notes, onDelete }) {

    if (notes === 0) {
        return<p> No notes yet!</p>
    }

    return (
        <div className="flex justify-center dark:text-gray-400 dark:bg-gray-800 items-center flex-col">
            {notes.map((note) => (
                <Note
                key={note.id}
                text={note.text}
                id={note.id}
                onDelete={ () => onDelete(note.id) }
                />
            ))}
        </div>
    )
}