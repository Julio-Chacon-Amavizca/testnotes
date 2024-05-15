import { useEffect, useContext } from "react"
import noteService from "../services/notes"
import loginService from "../services/login"
import Context from "../context/userContextProvider"

export const useUser = () => {
    const {user, setUser} = useContext(Context)
    // const {jwt, setJWT} = useContext(Context)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [setUser])

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