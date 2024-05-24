import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import { useUser } from "./hooks/useUser";
import { User } from "./components/User";

const Users = () => {
    const { create, users, deletes, editUserHook } = useUser()
    const [userToEdit, setUserToEdit] = useState(null)


    useEffect(() => {
        console.log("paginaUsers" + users)
    }, [users])

    const createUser = (userObject) => {
        create(userObject)
            .catch(error => {
                if (error.response.data.error) {
                    alert('Error: ' + error.response.data.error)
                }
            })
    }

    const deleteUser = (id, index, username) => {
        console.log('deleteUser: ', id, index)
        var opcion = window.confirm("ELIMINAR USUARIO\nEstás Seguro que deseas Eliminar el usuario: " + username);
        if (opcion === true) {
            deletes(id, index)?.catch(error => {
                console.log(error)
                if (error.response) {
                    alert('Error: ' + error.response.data.error)
                }
            })
        }
    }

    const editUser = (id, username, name, index) => {
        console.log('editUser: ', id, username, name, index)
        setUserToEdit({ id, username, name, index })
        console.log('userToEdit: ', userToEdit)
        alert('EDITAR USUARIO\nPor favor, presione el botón de editar usuario del formulario principal para comenzar la edición')
    }

    const updateUser = (userToEditx) => {
        console.log('updateUser: ', userToEditx)
        editUserHook(userToEditx)?.catch(error => {
            console.log(error)
            if (error.response) {
                alert('Error: ' + error.response.data.error)
            }
        })
    }

    return (
        <>
            <div>
                <UserForm createUser={createUser} updateUser={updateUser} userToEdit={userToEdit} />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4 ">
                {
                    users === null
                        ? ''
                        : users.map((file, indexItem) => (
                            <div key={indexItem}>
                                <User key={file.id} editUser={editUser} id={file.id} deleteUser={deleteUser} name={file.name} index={indexItem} username={file.username} />
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Users;