
import '../styles/Note.css';

export const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make not important'
        : 'make important';

    return (
        <li className='note'>

            {/* <p className='showNotes'>{note.content}</p> */}
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

