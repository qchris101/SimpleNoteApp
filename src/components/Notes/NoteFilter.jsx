import { useState } from "react";
import useNotes from "../../hooks/useNotes";


export default function NoteFilter() {

    const { filterNotes } = useNotes()

    const [ searchTerm, setSearchTerm] = useState('')
    
    
    const handleChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        filterNotes(value)
    }
    
    
    return(
        <div>
            <input 
            className="input" 
            value={searchTerm}
            placeholder="Search Notes..." 
            type="text" 
            onChange={handleChange}>
            </input>
        </div>
    )
}