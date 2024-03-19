import React from 'react';
import Togglable from './Togglable';
import PropTypes from 'prop-types';


export default function LoginForm({ handleSubmit, ...props }) {

    return (
        <Togglable buttonLabel='Show Login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <div>
                    <input
                        className='username-input'
                        type='text'
                        value={props.username}
                        name='username'
                        onChange={props.handleUsernameChange}
                        placeholder="Usuario"
                    />
                </div>
                <div>
                    <input
                        className='password-input'
                        type='password'
                        value={props.password}
                        name='password'
                        onChange={props.handlePasswordChange}
                        placeholder="Contraseña"
                    />
                </div>
                <button id='loginButton' type='submit' className='send'>Login</button>
            </form>
        </Togglable>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}
