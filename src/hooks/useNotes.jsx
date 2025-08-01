import { useContext } from "react"
import { NotesContext } from '../Context/NotesContext'


export default function useNotes() {
    return useContext(NotesContext)
}