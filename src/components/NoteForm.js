import React, { useRef, useState } from "react"
import Togglable from "./Togglable"
import { Button } from "react-bootstrap"

export default function NoteForm({ addNote, handleLogout }) {
    const togglableRef = useRef()

    const [newNote, setNewNote] = useState('')


    const handleChange = (event) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
        }

        addNote(noteObject)
        setNewNote('')

        togglableRef.current.toggleVisibility()

    }

    return (
        <Togglable buttonLabel={'Crear Nota'} ref={togglableRef}>
            <h3>Crear una nota</h3>

            <form className='notasForm container' onSubmit={handleSubmit}>
                <input className='note-input'
                    value={newNote}
                    onChange={handleChange}
                    placeholder='Escribe una nota'
                />
                <Button className='send' type="submit">save</Button>
                <Button className='logout' onClick={handleLogout}>Logout</Button>
            </form>
        </Togglable>
    )
}