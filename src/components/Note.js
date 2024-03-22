import { Button } from 'react-bootstrap';
import '../styles/Note.css';
import { Link } from 'react-router-dom';

export const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make not important'
        : 'make important';

    return (
        <>
            <div className='note'>
                <td>
                    <Link to={`/notes/${note.id}`} className='showNotes'>{note.content}</Link>
                </td>
                <td>
                    <Button onClick={toggleImportance}>{label}</Button>
                </td>
                {/* {note.content} */}
            </div>
        </>
    )
}

