import React, { useState } from 'react';


export default function LoginForm({ handleSubmit, ...props }) {
    const [loginvisible, setLoginVisible] = useState(false)
    const hideWhenVisible = { display: loginvisible ? 'none' : '' }
    const showWhenVisible = { display: loginvisible ? '' : 'none' }


    return (
        <div>

            <div className='loginForm' style={hideWhenVisible}>
                <button onClick={() => setLoginVisible(true)}> Show loggin</button>
            </div>

            <div className='loginForm' style={showWhenVisible}>
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
                    <button type='submit' className='send'>Login</button>
                </form>
                <button onClick={() => setLoginVisible(false)}>Cancel</button>
            </div>
        </div>
    )
}