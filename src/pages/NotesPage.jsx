import NoteList from '../components/Notes/NoteList';
import NoteForm from '../components/Notes/NoteForm';
import useNotes  from '../hooks/useNotes';
// import useTrash  from '../hooks/useTrash';

export default function NotesPage() {
  const { notes, addNote, updateNote, deleteNote, id } = useNotes();
  
  return (
    <div>
      <NoteForm addNote={addNote} />
      <NoteList
        key={id}
        notes={notes}
        onDelete={deleteNote}
        onUpdate={updateNote}
      />
      
    </div>
    
  );
}