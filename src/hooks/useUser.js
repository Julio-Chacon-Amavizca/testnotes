import { useEffect, useContext } from "react"
import noteService from "../services/notes"
import loginService from "../services/login"
import Context from "../context/userContextProvider"
import pdfsService from "../services/pdfs"

export const useUser = () => {
    const {user, setUser} = useContext(Context)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
            pdfsService.setToken(user.token)
        }
    }, [setUser])

    const logout = () => {
        setUser(null)
        console.log('user', user)
        noteService.setToken(null)
        pdfsService.setToken(null)
        window.localStorage.removeItem('loggedNoteappUser')
    }

    const login = async ({ username, password }) => {
        const user = await loginService.login({
            username,
            password
        })

        window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
        noteService.setToken(user.token)
        pdfsService.setToken(user.token)

        setUser(user)
    }

    return {
        user,
        logout,
        login
    }
}