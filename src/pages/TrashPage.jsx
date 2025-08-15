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
      <div className='w-full min-w-[500px] rounded-lg  flex justify-center'>
        <ul>
          {trashedNotes.map(({ id, text, date, title}) => (
            <li  className="m-3"
            key={id}>
              <div className="card flex shadow-xl font-[400] text-[16px] px-15 py-8 font-[proxima_soft]">
              <h2 className='card-title'>{title}</h2>
                <p>{text}</p>
        
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