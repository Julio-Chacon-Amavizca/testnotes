import React from "react";
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Notes from "./Notes";
import { NoteDetail } from "./components/NoteDetail";
import Login from "./Login";
import { useUser } from "./hooks/useUser";
import { useNotes } from "./hooks/useNote";

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

const inlineStles = {
  header: {
    padding: 5
  }
}

const App = () => {
  const { notes } = useNotes()
  const { user } = useUser()


  return (
    <BrowserRouter>
      <header>
        <Link style={inlineStles.header} to="/" >home</Link>
        <Link style={inlineStles.header} to="/notes" >notes</Link>
        <Link style={inlineStles.header} to="/users" >users</Link>
        {
          user
            ? <em>{user.name} logged-in</em>
            : <Link style={inlineStles.header} to="/login" >Login</Link>
        }
      </header>
      <Routes>
        <Route exact path="/login"
          element={
            user
              ? <Navigate to='/' />
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
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;