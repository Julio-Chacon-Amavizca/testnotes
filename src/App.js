import React from "react";
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Notes from "./Notes";
import { NoteDetail } from "./components/NoteDetail";
import Login from "./Login";
import { useUser } from "./hooks/useUser";
import { useNotes } from "./hooks/useNote";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
      <div className="container">
        <Navbar collapseOnSelect expand='lg' bg="light" data-bs-theme="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <Link style={inlineStles.header} to="/" >Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={inlineStles.header} to="/notes" >Notes</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={inlineStles.header} to="/users" >Users</Link>
              </Nav.Link>
              <Nav.Link>
                {
                  user
                    ? <em>{user.name} logged-in</em>
                    : <Link style={inlineStles.header} to="/login" >Login</Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
      </div>
    </BrowserRouter>
  );
}

export default App;