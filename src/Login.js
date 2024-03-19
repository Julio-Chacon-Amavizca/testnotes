import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import noteService from './services/notes';
import loginService from '../src/services/login';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const history = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

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

            setUser(user)
            setUsername('')
            setPassword('')

            history('/notes')
        } catch (e) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }


    if (errorMessage) {
        return <div>{errorMessage}</div>
    }

    if (user) {
        return <p>{user.name} is logged in</p>
    }

    return (
        <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
        />
    )
}