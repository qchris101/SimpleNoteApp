import NoteTrashList from '../components/Notes/NoteTrashList';
import useTrash  from '../hooks/useTrash';

export default function TrashPage() {
  const { trashedNotes } = useTrash();

  return <NoteTrashList trashedNotes={trashedNotes} />;
}