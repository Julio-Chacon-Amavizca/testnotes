import React, { useContext, useState } from "react";
import LoginForm from "./components/LoginForm";
import noteService from './services/notes';
import loginService from '../src/services/login';
import { useNavigate } from 'react-router-dom';
import Context from "./context/userContextProvider";
import pdfsService from "./services/pdfs";
import userService from "./services/user";

export default function Login() {
    const history = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(Context)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username,
                password
            })

            window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
            noteService.setToken(user.token)
            pdfsService.setToken(user.token)
            userService.setToken(user.token)

            setUser(user)
            setUsername('')
            setPassword('')

            history('/home')
        } catch (e) {
            setErrorMessage('Usuario o contraseña incorrectos')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    return (
        <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
            errorMessage={errorMessage}
        />
    )
}