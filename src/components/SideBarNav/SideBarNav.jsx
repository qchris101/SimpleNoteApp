

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

import ThemeToggle from "../themeToggle";

export default function SideBarNav() {
  return (

  <div className="navbar  shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
        </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link className="btn" to="/">Notes</Link>
        </li>
        <li>
          <Link className="btn" to="/Trash">Trash</Link>
        </li>
        <li>
          <Link className="btn" to="/Favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  </div>

  <div className="navbar-center p-2">
    <Link className="btn btn-ghost text-xl" to="/">NotesUI</Link>
  </div>
  <div className="navbar-end">
    <input className="input" placeholder="Search" type="text">
    </input>
      <ThemeToggle />
  </div>
</div>
  );
}
    // <nav className="p-4 flex gap-4">
    //   <Link className="btn" to="/">Notes</Link>
    //   <Link className="btn" to="/Trash">Trash</Link>
    //   <Link className="btn" to="/Favorites">Favorites</Link>
    // </nav>