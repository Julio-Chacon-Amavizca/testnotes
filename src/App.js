import './App.css';
import { useState } from 'react';
import { Note } from './components/Note'
import React from 'react';
import { useEffect } from 'react';
import loginService from '../src/services/login';
import noteService from './services/notes';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';

const App = () => {
  const [notes, setNotes] = useState([])

  const [newNote, setNewNote] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [showAll, setShowAll] = useState(true)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
        console.log('initialNotes', initialNotes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      }).catch(error => {
        setErrorMessage('Error al crear la nota. Agregue contenido a la nota.')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password
      })
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    setUser(null)
    noteService.setToken(null)
    window.localStorage.removeItem('loggedNoteappUser')
  }

  const renderCreateNoteForm = () => {
    return (
      <form className='notasForm' onSubmit={addNote}>
        <input className='note-input'
          value={newNote}
          onChange={handleNoteChange}
          placeholder='Escribe una nota'
        />
        <button className='send' type="submit">save</button>
        <button className='logout' onClick={handleLogout}>Logout</button>
      </form>
    )
  }

  return (
    <div className="App">
      <h1>Notas</h1>
      <Notification message={errorMessage} />
      {
        user
          ? renderCreateNoteForm()
          : <LoginForm 
          username= {username}
          password= {password}
          handleUsernameChange= {({ target }) => setUsername(target.value)}
          handlePasswordChange= {({ target }) => setPassword(target.value)}
          handleSubmit= {handleLogin}
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
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
    </div>
  );
}


export default App
