

// Things I need a SideBar to do:

// Set a button onClick to add note
    // transitions to the add note section.

// set a button onClick shows all trashed notes
    // In order for this to work we need an api to hold all our trashed notes 
    // On transition show user all trashed notes

// Set a button onClick shows all favorite notes
    // We can maybe store favorite notes to an array || create api to hold fav's
    // On transition show user all fav notes



// Will looking something like: 

import { Link } from "react-router-dom";

export default function SideBarNav() {
  return (
    <div className="">

    <nav className="border 2 p-4 flex flex-col gap-4">
      <Link className="btn" to="/">Notes</Link>
      <Link className="btn" to="/Trash">Trash</Link>
      <Link className="btn" to="/Favorites">Favorites</Link>
    </nav>
    </div>
  );
}