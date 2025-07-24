import { useState } from "react";

export function useNotes() {

    const [ notes, setNotes] = useState([])
    
    const addNote = (text) => {
        setNotes([ ...notes, {id: crypto.randomUUID().toString().substring(0,12), text, date: new Date().toISOString().split("T")[0] }])
    }
    
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    const updateNote = (id, newText) => {
        setNotes( notes.map((note) => 
            note.id === id ? {...note, text: newText } : note)
        )
    }

    // const favNote = (id, Boolean?) = {
    // maybe newState? => const [ favNotes, setFavNotes ] = useState([])
    // setFavNotes(notes.map((note) => 
    //      note.id ===id ? {...note, favorite: boolean (true)} : note )
    //      )
    //}

    // may newState also?
    // const trashNote = (id) => {
    //    setTrashNote(notes.filter((note) => note.id !== id))
    //}
    return { notes, addNote, deleteNote, updateNote}
}

// useNotes (defines) → deleteNote(),addNote(),updateNote()

// App.jsx (passes to) → NoteList onDelete={deleteNote}, onUpdate(updateNote)

// NoteList.jsx (passes to each) → Note onDelete={() => deleteNote(note.id)}

// Note.jsx (uses) → onClick={onDelete}
