


import { useState } from "react";


export default function useTrash() {

  const [trashedNotes, setTrashedNotes] = useState([]);

  const trashNote = (note) => {
    setTrashedNotes([...trashedNotes, note]);
  };

  return { trashedNotes, trashNote };
}