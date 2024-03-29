import React, { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from 'prop-types'

const Togglable = forwardRef(({ children, buttonLabel }, ref) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div className='loginForm' style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{buttonLabel}</button>
            </div>
            <div>
                <div className='loginForm' style={showWhenVisible}>
                    {children}
                    <button onClick={toggleVisibility}>Cancel</button>
                </div>
            </div>
        </div>
    )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Togglable