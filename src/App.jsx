// We import all of our hooks from useNotes this also changes our state.
// We import our form component and then render it in our return
import NoteForm from "./components/Notes/NoteForm";

import NoteList from "./components/Notes/NoteList";
// We import our Note component which handles how we organize the data after its entered

// import Header from "./components/Header/Header";
import NotesPage from "./pages/NotesPage";
import Footer from "./components/Footer/Footer";
import SideBarNav from "./components/SideBarNav/SideBarNav";
import { Route, Routes } from "react-router-dom";
import TrashPage from "../src/pages/TrashPage"
import NotesProvider from "./Context/NotesProvider";

// import SideBarNav from "./components/SideBarNav/SideBarNav.jsx"

export default function App() {

 
  return (
    <>
    <NotesProvider>
      
      <div>
        <SideBarNav />
        <div>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/trash" element={<TrashPage />} />
          </Routes>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow"></main>
      <Footer />
      </div>
    </NotesProvider>
    </>
  )
}



