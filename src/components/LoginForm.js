import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import Notification from './Notification';
const containerClasses = "min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 p-4 h-14 bg-gradient-to-r";
const cardClasses = "border-gray-800 bg-transparent shadow-2xl shadow-gray-700 rounded-lg border-2 p-8 max-w-sm w-full ";
const labelClasses = "block text-zinc-700 dark:text-zinc-200 text-sm font-bold mb-2";
const inputClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-500 leading-tight focus:outline-none focus:shadow-outline";

function FormActions({ onCancel }) {
    return (
        <div className="flex items-center justify-between">
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Aceptar
            </button>
        </div>
    );
}


export default function LoginForm({ handleSubmit, ...props }) {

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Inicio de sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor='username' className={labelClasses}>Usuario</label>
                        <input className={inputClasses}
                            id='username'
                            type='text'
                            value={props.username}
                            name='username'
                            onChange={props.handleUsernameChange}
                            placeholder="Usuario"
                            required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='password' className={labelClasses}>Contraseña</label>
                        <input className={inputClasses}
                            id='password'
                            type='password'
                            value={props.password}
                            name='password'
                            onChange={props.handlePasswordChange}
                            placeholder="Contraseña" />
                    </div>
                    <Notification message={props.errorMessage} /><br />
                    <FormActions />
                </form>
            </div>
        </div>
    )
    // Commented code
    /*
    return (
            <Form className='App loginForm container' onSubmit={handleSubmit}>
                <Form.Group id='username'>
                    <input
                        className='username-input'
                        type='text'
                        value={props.username}
                        name='username'
                        onChange={props.handleUsernameChange}
                        placeholder="Usuario"
                    />
                </Form.Group>
                <Form.Group id='password'>
                    <input
                        className='password-input'
                        type='password'
                        value={props.password}
                        name='password'
                        onChange={props.handlePasswordChange}
                        placeholder="Contraseña"
                    />
                </Form.Group>
                <Button id='loginButton' type='submit'>Login</Button>
            </Form>
    )
    */
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}
