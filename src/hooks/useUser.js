import { useState, useEffect } from "react"
import noteService from "../services/notes"
import loginService from "../services/login"

export const useUser = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])

    const logout = () => {
        setUser(null)
        noteService.setToken(null)
        window.localStorage.removeItem('loggedNoteappUser')
    }

    const login = async ({ username, password }) => {
        const user = await loginService.login({
            username,
            password
        })

        window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
        noteService.setToken(user.token)

        setUser(user)
    }

    return {
        user,
        logout,
        login
    }
}