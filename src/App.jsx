// We import all of our hooks from useNotes this also changes our state.
import { useNotes } from "./hooks/useNotes";
// We import our form component and then render it in our return
import NoteForm from "./components/Notes/NoteForm";

import NoteList from "./components/Notes/NoteList";
// We import our Note component which handles how we organize the data after its entered
import Note from "./components/Notes/Note";

import Header from "./components/Header/Header";

export default function App() {

  const { notes, addNote, deleteNote } = useNotes()
  // Setting Up State our display will be updated after every submit
  // const [ notes, setNotes ] = useState([])

  // addNote passed as a prop to the NoteForm.jsx
  // this creates a new array that stores all our notes and attaches an id and our text
  // from noteForm
  // const addNote = (text) => {
  //   setNotes( [...notes, {id: crypto.randomUUID(), text }])
  // }

  // This deletes a note via an id
  // filter removes elements via a test
  // with the specific note does id:1 not equal id:2? (returns true)
  // we are looking for does id:1 not equal id:1? (returns false  id:1 does equal id:1)
  // delete id:1
  // "keep all the notes except the one with the matching id."
  // const deleteNote = (id) => {
  //   setNotes(notes.filter((note) => note.id !== id))
  // }

  return (
    // <div>
    //   <h1 className="flex justify-center dark:text-gray-400">Simple Note Taker</h1>
    //   {/* Render our noteForm and pass the addNote function and prop */}
    //   <NoteForm addNote={addNote}/>

    //   <div className="flex justify-center dark:text-gray-400 dark:bg-gray-800 items-center flex-col">
    //     {/* does our notes array(state) === 0 
    //     the show a no notes msg
    //     else : map over our notes area and give it a name of note
    //     note = {id: 1, text: "Buy Milk."} 
    //     note = {id: 2, text: "workout."}
    //     key is needed so react can identify elements in a list */}
    //     {notes.length === 0 ? (
    //       <p>No Notes Yet!</p>
    //     ) : (
    //       notes.map((note) => (
    //         <Note
    //         // key is needed so react knows where to look in our array and its also attached
    //         // when a note is added but we know which note to look for
    //         key={note.id}
    //         // shows us the text 
    //         text={note.text}
    //         // shows the id# of the note
    //         id={note.id}
    //         // onDelete is a prop in Note.jsx and defined in App.jsx that way we can 
    //         // pull the id from our note and delete via whats stated above.
    //         onDelete={() => deleteNote(note.id)}
    //         />
    //       ))
    //     )}
    //   </div>
    // </div>

    <div>
      
      <Header/>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote}/>

    </div>
  )
}



