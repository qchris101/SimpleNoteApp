
import Note from "./Note";
export default function NoteList ({ notes, onDelete, onUpdate, ToggleFavorite }) {

   
    
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

            {console.log("This is NoteList.jsx")}
            
            {notes.map((note) => (
                <Note
                key={note.id}
                text={note.text}
                date={note.date}
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
