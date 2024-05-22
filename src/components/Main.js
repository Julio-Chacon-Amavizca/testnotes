import React, { useState, useEffect, useRef, useContext } from 'react';
// import MainContent from './MainContent';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Login';
import { NoteDetail } from './NoteDetail';
import Notes from '../Notes';
import { useNotes } from '../hooks/useNote';
import { useUser } from '../hooks/useUser';
import Context from '../context/userContextProvider';
import UserForm from './UserForm';
/*import Pdfs from '../Pdf';*/
import Pdfs from '../Pdf';


const Sidebar = ({ isOpen, onClose }) => {
    // Ref to track the sidebar DOM element
    const sidebarRef = useRef();
    const { logout } = useUser()
    const { user } = useContext(Context)
    console.log('user', user)


    // Click away handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    const handleLogout = () => {
        logout()
    }


    return (
        <div ref={sidebarRef} className={`bg-zinc-700 w-64 p-5 text-white space-y-2`}>

            {
                user
                    ? <>
                        <Link to="/" className="block">Inicio</Link>
                        <Link to="/notes" className="block">Notas</Link>
                        <Link to="/users" className="block">Usuarios</Link>
                        <Link to="/documents" className="block">Documentos</Link>
                    </>
                    : ""
            }
            {
                user && window.localStorage.getItem('loggedNoteappUser')
                    ? <em><Link to="/login" onClick={handleLogout} className="block"><br />Cerrar Sesion</Link></em>
                    : <Link to="/login" className="block">Login <br /> <p>Inicie sesión</p></Link>

            }
        </div >
    );
};

const Navbar = ({ onToggle }) => (
    <nav className="bg-zinc-800 p-4">
        <button onClick={onToggle} className={`text-white focus:outline-none`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
    </nav>
);


const Main = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);
    const { user } = useContext(Context);
    const { notes } = useNotes();
    return (
        <div className={`min-h-screen flex flex-col `}>
            <Navbar onToggle={toggleSidebar} />
            <div className={`flex flex-grow`}>
                <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
                <div className="flex-1 flex flex-col bg-zinc-100 p-0">
                    <div className="justify-center">
                        <Routes>
                            <Route exact path="/login"
                                element={
                                    user && window.localStorage.getItem('loggedNoteappUser')
                                        ? <Navigate to='/notes' />
                                        : <Login />}
                            />
                            {
                                user && window.localStorage.getItem('loggedNoteappUser')
                                    ?
                                    <><Route path="/notes/:id"
                                        element={<NoteDetail notes={notes} />}
                                    />
                                        <Route path="/notes"
                                            element={<Notes />}
                                        />

                                        <Route path="/users"
                                            element={<UserForm />}
                                        />
                                        <Route path="/documents"
                                            element={<Pdfs />}
                                        />
                                        <Route path="/"
                                            element={<UserForm />}
                                        />
                                    </>
                                    : <><Route path="/login"
                                        element={<Login />}
                                    /></>
                            }
                            <Route
                                path="/*"
                                element={<Navigate to="/login" replace />}
                            />

                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;

/*import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import MainContent from './MainContent';

// Constants for repeated class names
const TEXT_SMALL = "text-sm";


// Main React Component
function Test() {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent />
        </div>
    );
}

// Sidebar Component
function Sidebar({ isOpen, toggleSidebar }) {
    const { user, logout } = useUser()

    const handleLogout = () => {
        logout()
    }


    return (
        <div className={`fixed inset-y-0 left-0 z-40 bg-zinc-800 text-white w-64 shadow-lg transform transition-transform duration-300 ${isOpen ? '' : '-translate-x-full'}`}>
            <div className="h-full flex flex-col justify-between">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
                    <button onClick={toggleSidebar} className="text-white mb-4">Toggle</button>
                    <NavLink>
                        <ul className="space-y-2">
                            {
                                user
                                    ? <li><Link to="/" className={TEXT_SMALL} onClick={handleLogout}>Logout</Link></li>
                                    : <li><Link to="/login" className={TEXT_SMALL}>Login</Link></li>
                            }
                            <li><Link to="/" className={TEXT_SMALL}>Home</Link></li>
                            <li><Link to="/notes" className={TEXT_SMALL}>Notes</Link></li>
                            <li><Link to="/users" className={TEXT_SMALL}>Users</Link></li>
                            <li><Link to="/documents" className={TEXT_SMALL}>Documents</Link></li>
                            <li><Link to="/principal" className={TEXT_SMALL}>Principal</Link></li>

                        </ul>
                    </NavLink>
                </div>
                <div className="p-4 bg-zinc-700">
                    <p className={TEXT_SMALL}>&copy; 2023 Your Company</p>
                </div>
            </div>
        </div>
    );
}

export default Test;*/