import { useState } from "react";

export function useNotes() {

    const [ notes, setNotes] = useState([])
    
    const addNote = (text) => {
        setNotes([ ...notes, {id: crypto.randomUUID().toString().substring(0,12), text }])
    }
    
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id))
    }

    return { notes, addNote, deleteNote }
}
