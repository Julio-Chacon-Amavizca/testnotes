import React from 'react';
import Togglable from './Togglable';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LoginForm({ handleSubmit, ...props }) {
    return (
        <Togglable buttonLabel='Show Login'>
            <Form className='loginForm container' onSubmit={handleSubmit}>
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
        </Togglable >
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}
