import { Button } from 'react-bootstrap';
import '../styles/Note.css';
import { Link } from 'react-router-dom';
import { NoteDetail } from './NoteDetail';

export const Note = ({ note, toggleImportance }) => {

    const label = note.important
        ? 'make not important'
        : 'make important';

    const handleClick = (id) => {
        <NoteDetail id={id} />
    }
    return (
        <>
            <td>
                <Link onClick={() => handleClick(note.id)} to={`/notes/${note.id}`} className='showNotes'>{note.content}</Link>
            </td>
            <td>
                <Button onClick={toggleImportance}>{label}</Button>
            </td>
        </>
    )
}

