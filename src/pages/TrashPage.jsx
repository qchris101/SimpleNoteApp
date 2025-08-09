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
    <h2 className='flex justify-center my-2'>Trashed Notes</h2>
      <div className="card w-auto  flex justify-center shadow-xl font-[400] text-[16px]  container max-w-4xl mx-auto px-15 py-8 font-[proxima_soft]ax-w-3/4">
        <ul className='flex justify-center'>
          {trashedNotes.map(({ id, text, date, title}) => (
            <li key={id}>
              <div className='card-body'>
              <h2 className='card-title'>{title}</h2>
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