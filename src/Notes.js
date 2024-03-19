import './App.css';
import { useState } from 'react';
import { Note } from './components/Note'
import React from 'react';
import Notification from './components/Notification';
import NoteForm from './components/NoteForm';
import LoginForm from './components/LoginForm';
import { useNotes } from './hooks/useNote';
import { useUser } from './hooks/useUser';

const Notes = () => {
    const { notes, toggleImportanceOf, addNote } = useNotes()
    const { user, login, logout } = useUser()

    const [errorMessage, setErrorMessage] = useState(null)
    const [showAll, setShowAll] = useState(true)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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


    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            login({ username, password })
            setUsername('')
            setPassword('')
        } catch (e) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    const handleLogout = () => {
        logout()
    }


    return (
        <div className="App">
            <h1>Notas</h1>
            <Notification message={errorMessage} />
            {
                user
                    ? <NoteForm

                        addNote={addOfNote}
                        handleLogout={handleLogout}
                    />
                    : <LoginForm
                        username={username}
                        password={password}
                        handleUsernameChange={({ target }) => setUsername(target.value)}
                        handlePasswordChange={({ target }) => setPassword(target.value)}
                        handleSubmit={handleLogin}
                    />
            }
            <br />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map((note, i) =>
                    <Note
                        key={i}
                        note={note}
                        toggleImportance={() => toggleImportanceOfNote(note.id)}
                    />
                )}
            </ul>
        </div>
    );
}


export default Notes
