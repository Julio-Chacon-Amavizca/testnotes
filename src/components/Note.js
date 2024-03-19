import '../styles/Note.css';
import { Link } from 'react-router-dom';

export const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make not important'
        : 'make important';

    return (
        <li className='note'>

            <Link to={`/notes/${note.id}`} className='showNotes'>{note.content}</Link>
            {/* {note.content} */}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

