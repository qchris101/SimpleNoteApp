
export default function TrashList ({ trashedNotes }) {
    if(trashedNotes.length === 0) {
        return <p>Trash is Empty</p>
    }
    return (
        <div>
            {trashedNotes.map((note) => (
                <div key={note.id}>
                    <p>{note.text}</p>
                    <p>Deleted on: {note.date}</p>
                </div>
            ))}
        </div>
    )
}