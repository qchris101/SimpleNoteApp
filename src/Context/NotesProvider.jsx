import { useState } from "react";
import { NotesContext } from "./NotesContext";



export default function NotesProvider({ children }) {

    const [notes, setNotes ] = useState([])

    const addNote = (text) => {
       
        const newNote ={
            id: crypto.randomUUID().toString().substring(0,12),
            text, 
            date: new Date().toISOString().split("T")[0] 
        }
        setNotes((prevNotes) => [...prevNotes, newNote])
    }

    const deleteNote = (id) => {

        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id ))
    }

    const updateNote = (id, newText) => {

        setNotes((prevNotes) => 
            prevNotes.map((note) =>
            note.id === id ? { ...note, text: newText } : note)
        )
    }

    return(
        <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
            {children}
        </NotesContext.Provider>
    )
        
}
