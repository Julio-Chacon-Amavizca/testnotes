import React, { useState, useEffect, useRef, useContext } from 'react';
// import MainContent from './MainContent';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Login';
import { useUser } from '../hooks/useUser';
import Context from '../context/userContextProvider';
/*import Pdfs from '../Pdf';*/
import Pdfs from '../Pdf';
import Users from '../User';

const Home = () => {
    const containerClasses = "max-w-lg mx-auto bg-gradient-to-r p-8 rounded-lg shadow-lg";
    const textClasses = "text-white text-lg";


    return (
        <div className={`${containerClasses} from-blue-500 to-teal-400 dark:from-blue-800 dark:to-teal-700 mt-16`}>
            <div className="flex items-center">
                <img src="https://placehold.co/150x150" alt="Icono Colorido" className="mr-4 rounded-full" />
                <p className={textClasses}>
                    Recuerda que en esta página podrás colocar todos tus archivos importantes y necesarios para tenerlos en el momento que necesites :D
                </p>
            </div>
        </div>

    )
}

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
                                        ? <Navigate to='/login' />
                                        : <Login />}
                            />

                            {
                                user && window.localStorage.getItem('loggedNoteappUser')
                                    ?
                                    <>
                                        <Route path="/users"
                                            element={<Users />}
                                        />
                                        <Route path="/documents"
                                            element={<Pdfs />}
                                        />
                                        <Route path="/"
                                            element={<Home />}
                                        />
                                        <Route path="/home"
                                            element={<Home />}
                                        />
                                    </>
                                    : <><Route path="/login"
                                        element={<Login />}
                                    />
                                    </>
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