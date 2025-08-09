
import Note from "./Note";
export default function NoteList ({ notes, onDelete, onUpdate, ToggleFavorite, }) {

   
    
    if (notes.length === 0) {
        return(
            <div className="flex my-4 justify-center">
                <div role= "alert" className="alert alert-info w-96 justify-center">
                No Notes Available
                </div>
            </div>
        )
    }

    return (
        <div className="w-full card resize-none focus:ring-0 text-[16px] my-10">
            <div className="card-body">

            
            {notes.map((note) => (
                <Note
                title={note.title}
                key={note.id}
                text={note.text}
                date={note.date}
                favorite={note.favorite}
                id={note.id}
                onUpdate={onUpdate}
                onToggleFavorite={() => ToggleFavorite(note.id)}
                onDelete={() => onDelete(note.id)}
                />
            ))}
            </div>
        </div>
    )   
}
