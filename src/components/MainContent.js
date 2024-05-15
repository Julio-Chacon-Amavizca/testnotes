import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Login';
import { NoteDetail } from './NoteDetail';
import Notes from '../Notes';
import PdfForm from './PdfForm';
import { useNotes } from '../hooks/useNote';
import { useUser } from '../hooks/useUser';

// MainContent Component
const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default function MainContent() {
    const { notes } = useNotes()
    const { user } = useUser()

    return (
        <div className="flex-grow p-4">
            <Routes>
                <Route exact path="/login"
                    element={
                        user
                            ? <Navigate to='/notes' />
                            : <Login />}
                />
                <Route path="/notes/:id"
                    element={<NoteDetail notes={notes} />}
                />
                <Route path="/notes"
                    element={<Notes />}
                />
                <Route path="/"
                    element={<Home />}
                />
                <Route path="/users"
                    element={<Users />}
                />
                <Route path="/documents"
                    element={<PdfForm />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}