import { useEffect, useContext, useState } from "react"
import noteService from "../services/notes"
import loginService from "../services/login"
import Context from "../context/userContextProvider"
import pdfsService from "../services/pdfs"
import userService from "../services/user"

export const useUser = () => {
    const { user, setUser } = useContext(Context)
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService
            .getAll()
            .then(initialUsers => {
                console.log(initialUsers)
                setUsers(initialUsers)
            })
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
            pdfsService.setToken(user.token)
            userService.setToken(user.token)

        }
    }, [setUser])

    const logout = () => {
        setUser(null)
        console.log('user', user)
        noteService.setToken(null)
        pdfsService.setToken(null)
        userService.setToken(null)
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
        userService.setToken(user.token)

        setUser(user)
    }

    const create = async (userObject) => {
        return userService
            .createUser(userObject)
            .then(returnedUser => {
                if (returnedUser.status === 201) {
                    setUsers(users.concat(returnedUser.data))
                    alert('Usuario creado con éxito')
                }
            })
    }

    const deletes = (id, index) => {
        userService
            .deleteUser(id)
            .then(data => {
                if (data.status === 204) {
                    alert('Usuario eliminado correctamente')
                    setUsers(users.filter((user, indexItem) => indexItem !== index))
                }
            })
    }

    const editUserHook = (userToEditx) => {
        console.log('editUserHook: ', userToEditx)
        userService
            .updateUser(userToEditx.id, userToEditx)
            .then(data => {
                console.log(data)
                if (data.status === 200) {
                    alert('Usuario editado correctamente')
                    setUsers(users.map(user => user.id !== userToEditx.id ? user : userToEditx))
                }
            })
    }

    return {
        user,
        users,
        logout,
        login,
        create,
        deletes,
        editUserHook
    }
}