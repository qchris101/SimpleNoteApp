// We import all of our hooks from useNotes this also changes our state.
import { useNotes } from "./hooks/useNotes";
// We import our form component and then render it in our return
import NoteForm from "./components/Notes/NoteForm";

import NoteList from "./components/Notes/NoteList";
// We import our Note component which handles how we organize the data after its entered

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

// import SideBarNav from "./components/SideBarNav/SideBarNav.jsx"

export default function App() {

const { notes, addNote, deleteNote, updateNote } = useNotes()
 
  return (
    <>
      <Header/>
      {/* 
      <SideBarNav/>
      
      */}

      <NoteForm 
      addNote={addNote} />

      <NoteList 
      notes={notes} 
      onDelete={deleteNote} 
      onUpdate={updateNote}/>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow"></main>
      <Footer />
      </div>
    </>
  )
}



