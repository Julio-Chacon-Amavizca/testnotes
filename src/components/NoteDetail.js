import React from "react";
import { useParams } from "react-router";

export const NoteDetail = ({ notes, toggleImportance }) => {
    const { id } = useParams()
    const note = notes.find(n => n.id === id)
    if (!note) {
        return null
    }
    console.log('note', note)
    return (
        <div>
            <h2>{note.content}</h2>
            <div>Usuario: {note?.user?.name}</div>
            <div>
                <strong>{note?.important ? 'important' : ''}</strong>
            </div>
        </div>
    )
}