import useNotes from "../hooks/useNotes";
import Note from "../components/Notes/Note";

export default function FavoritesPage() {
    const {notes, updateNote, trashNote, toggleFavorite } = useNotes()

    const favoriteNotes = notes.filter((note) => note.favorite)

    if(favoriteNotes.length === 0 ){
        return(  
            <div className="flex my-4 justify-center">
                <div role= "alert" className="alert alert-info w-96 justify-center">
                    No Favorites Available
                </div>
            </div>
    )
}

    return(
        <div className="card">
            <div className="card-body">
            {favoriteNotes.map((note) => (
                <Note
                key={note.id}
                title={note.title}
                id={note.id}
                text={note.text}
                date={note.date}
                favorite={true}
                onUpdate={updateNote}
                onDelete={() => trashNote(note.id)}
                onToggleFavorite={() => toggleFavorite(note.id)}
                />
            ))}

            </div>
        </div>
    )
}