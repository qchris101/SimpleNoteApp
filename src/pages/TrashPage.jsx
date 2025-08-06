// import NoteTrashList from '../components/Notes/NoteTrashList';
import useNotes from '../hooks/useNotes';

export default function TrashPage() {
  const { trashedNotes, restoreNote, deleteNote } = useNotes();

   if(trashedNotes.length === 0) {
        return(   <div className="flex my-4 justify-center">
                <div role= "alert" className="alert alert-info w-96 justify-center">
                Trash is currently empty.
                </div>
            </div>
        )  
  }

    return (
    <>
    <h2>Trashed Notes</h2>
      <div className="card bg-gray-600 w-auto">
        <ul>
          {trashedNotes.map(({ id, text, date}) => (
            <li key={id}>
              <div className='card-body'>
                <p>{text}</p>
                <p>ID: {id}</p>
                <p>Deleted on: {date}</p>
              <div className='card-actions'>
                <button className="btn" onClick={() => restoreNote(id)}>Restore</button>
                <button className="btn" onClick={() => deleteNote(id)}>Delete</button>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
    )
}