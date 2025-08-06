import { useState } from "react";
import { NotesContext } from "./NotesContext";



export default function NotesProvider({ children }) {

    const [ notes, setNotes ] = useState([])
    const [ trashedNotes, setTrashedNotes ] = useState([])


    const addNote = (text) => {
       
        const newNote = {
            id: crypto.randomUUID().toString().substring(0,12),
            text, 
            date: new Date().toISOString().split("T")[0],
            favorite: false
        }
        setNotes((prevNotes) => [...prevNotes, newNote])
    }

    const deleteNote = (id) => {

        setTrashedNotes((prev) => prev.filter((note) => note.id !== id ))
    }

    const trashNote = (id) => {
        const noteToTrash = notes.find((note) => note.id === id)
            if(noteToTrash) {
                setTrashedNotes((prevTrash) => [ ...prevTrash, noteToTrash])
                setNotes(prevNotes => prevNotes.filter((note) => note.id !== id))
            }
    }

    const updateNote = (id, newText) => {

        setNotes((prevNotes) => 
            prevNotes.map((note) =>
            note.id === id ? { ...note, text: newText } : note)
        )
    }
    const restoreNote = (id) => {
        const noteToRestore = trashedNotes.find((note) => note.id === id)
        if(noteToRestore) {
            setNotes((prevNotes) => [...prevNotes, noteToRestore])
            setTrashedNotes((prevTrash) => prevTrash.filter((note) => note.id !== id))

        }
    }

    const toggleFavorite = (id) => {
            setNotes((prevNotes) =>
                prevNotes.map((note) => note.id === id ? { ...note, favorite: !note.favorite } : note)
  );
};

    return(
        <NotesContext.Provider value={{ notes, trashedNotes, addNote, deleteNote, updateNote, trashNote, restoreNote, toggleFavorite}}>
            {children}
        </NotesContext.Provider>
    )
        
}
