import { useState } from "react";


export default function UserForm({ createUser, updateUser, userToEdit }) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userObject = {
            username: username,
            name: name,
            password: password,
        }
        console.log(userObject)

        if (username === '' || name === '' || password === '') {
            alert('Por favor, llene todos los campos')
            return
        }

        if (username !== null && name !== null && password !== null) {
            console.log(username, name, password)
            setUsername('')
            setName('')
            setPassword('')
            createUser(userObject)
        }
    }

    const handleSubmitChangePassword = () => {

        if (!isEdit) {
            alert('Ha comenzado con la edicion de contraseña de usuario: ' + userToEdit.username + '\nRellene el campo contraseña y presione el botón de editar usuario para cambiar la contraseña del usuario seleccionado')
            setName(userToEdit.name)
            setUsername(userToEdit.username)

            setPassword('')
            setIsEdit(true)
            return
        }

        if (isEdit) {
            setIsEdit(false)
            const option = window.confirm('¿Está seguro que desea cambiar la contraseña del usuario: ' + userToEdit.username + '?')
            if (option) {
                const userToEditx = {
                    username: username,
                    name: name,
                    password: password,
                    id: userToEdit.id,
                    index: userToEdit.index

                }
                updateUser(userToEditx)
                setUsername('')
                setName('')
                setPassword('')
                return
            }
        }
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-start p-10 bg-zinc-100">
            <div className="w-full max-w-lg mb-8">
                <form key={'a'}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="username">
                            Usuario
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            name="username"
                            type="text"
                            minLength={4}
                            maxLength={12}
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Usuario"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            minLength={3}
                            maxLength={16}
                            onChange={handleNameChange}
                            placeholder="Nombre"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor="password">
                            Nombre
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            type="password"
                            minLength={4}
                            maxLength={8}
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="******************"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Agregar Usuario
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => {
                                userToEdit === null
                                    ? alert('Por favor, seleccione un usuario para editar')
                                    : handleSubmitChangePassword(userToEdit)
                            }}
                        >
                            Editar Usuario
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


/*
function InputField({ id, label, type, placeholder, onChange }) {
    return (
        <div className="mb-4">
            <label className="block text-zinc-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
        </div>
    );
}*/