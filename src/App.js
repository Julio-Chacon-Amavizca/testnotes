import './App.css';
import { useState } from 'react';
import { Note } from './Note.js'
import React from 'react';
import { useEffect } from 'react';
import { create as createNotes, getAll as getAllNotes } from './Servicios/Notes/index.js';

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [error, setError] = useState(null)


  useEffect(() => {
    getAllNotes()
      .then(notes => {
        setNotes(notes);
      });
  }, []);


  const handleChange = (event) => {
    setNewNote(event.target.value)
  };



  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('creando nota...')
    const noteToAdd = {
      content: newNote,
      date: newNote
    };

    setError('');

    createNotes(noteToAdd)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      }).catch(error => {
        console.log('error', error);
        setError('Error al crear la nota')
      });
    //setNotes([...notes, noteToAdd])
    setNewNote('')
    console.log('nota creada')

  };

  return (
    <div className="App">
      <h1>Notes</h1>
      {error ? <span style={{ color: 'red' }}>{error}</span> : ''}
      <ul>
        {notes
          .map(note => <Note key={note.id} {...note} />
          )}
        <form onSubmit={handleSubmit}><br />
          <input type="text" onChange={handleChange} value={newNote} />
          <button>Crear nota</button>
        </form>
      </ul>
    </div>
  );
}


export default App
