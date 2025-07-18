
// text , onDelete, and id are all props, children from our App,jsx
// text gets defined in our NoteForm for our input
// then gets added to our setNotes State
// so when Note is rendered we can pass the text data
// onDelete is passed from App.jsx because onDelete once called by a click event
// references in reverse 
// button(onclick) --> looks at prop onDelete -->
// onDelete calls deleteNote function in App.jsx
// passing allows us to pass the deleteNote Function which is invoked when button is clicked. 
export default function Note ({ text, onDelete, id }) {
    return (
        <div className="dark:text-gray-400">
            <p>{text}</p>
            <p>ID Number: {id}</p>
            <button onClick={onDelete} className="border 2 border-solid">Delete</button>
        </div>
    )
}