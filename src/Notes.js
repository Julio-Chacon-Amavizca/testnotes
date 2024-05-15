import './App.css';
import { useEffect, useState } from 'react';
import { Note } from './components/Note'
import React from 'react';
import Notification from './components/Notification';
import NoteForm from './components/NoteForm';
// import LoginForm from './components/LoginForm';
import { useNotes } from './hooks/useNote';
import { useUser } from './hooks/useUser';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
// import Login from './Login';

const Notes = () => {
    const { notes, toggleImportanceOf, addNote } = useNotes()
    const { logout } = useUser()

    const [errorMessage, setErrorMessage] = useState(null)
    const [showAll, setShowAll] = useState(true)

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    useEffect(() => {
        console.log('holaaa')
    }, [])

    const addOfNote = (noteObject) => {
        addNote(noteObject)
            .catch(error => {
                if (!error.response) {
                    console.log('Error: Network Error')
                }
                setErrorMessage('Error: ' + error.response.data.error)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
    }

    const toggleImportanceOfNote = (id) => {
        toggleImportanceOf(id)
            .catch(error => {
                setErrorMessage(
                    `Note was already removed from server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
    }


    // const handleLogin = async (event) => {
    //     event.preventDefault()
    //     try {
    //         login({ username, password })
    //         setUsername('')
    //         setPassword('')
    //     } catch (e) {
    //         setErrorMessage('Wrong credentials')
    //         setTimeout(() => {
    //             setErrorMessage(null)
    //         }, 5000)
    //     }
    // }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="App container">
            <h1>Notas</h1>
            <Notification message={errorMessage} />

            <NoteForm

                addNote={addOfNote}
                handleLogout={handleLogout}
            />

            <br />
            <div>
                <Button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </Button>
            </div>
            <Table striped>
                <tbody>
                    {notesToShow.map((note, i) =>
                        <tr key={i}>
                            <Note
                                key={i}
                                note={note}
                                toggleImportance={() => toggleImportanceOfNote(note.id)}
                            />
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}


export default Notes
