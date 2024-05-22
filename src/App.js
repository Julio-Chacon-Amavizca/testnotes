import React from "react";
import { BrowserRouter } from "react-router-dom";
//import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import { UserContextProvider } from "./context/userContextProvider";
import Main from "./components/Main";

//const inlineStles = {
//header: {
//padding: 5
//}
//}


const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
          <Main />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

/* <Navbar collapseOnSelect expand='lg' bg="light" data-bs-theme="light">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <NavLink>
        <Link style={inlineStles.header} to="/" >Home</Link>
      </NavLink>
      <NavLink>
        <Link style={inlineStles.header} to="/notes" >Notes</Link>
      </NavLink>
      <NavLink>
        <Link style={inlineStles.header} to="/users" >Users</Link>
      </NavLink>
      <NavLink>
        <Link style={inlineStles.header} to="/documents" >Documentos</Link>
      </NavLink>
      <NavLink>
        <Link style={inlineStles.header} to="/principal" >Principal</Link>
      </NavLink>
      <NavLink>
        {
          user
            ? <em>{user.name} logged-in</em>
            : <Link style={inlineStles.header} to="/login" >Login</Link>
        }
      </NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar> */