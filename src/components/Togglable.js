import React, { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap";

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
            <div className='loginForm container' style={hideWhenVisible}>
                <Button onClick={toggleVisibility}>{buttonLabel}</Button>
            </div>
            <div>
                <div className='loginForm container' style={showWhenVisible}>
                    {children}
                    <Button onClick={toggleVisibility}>Cancel</Button>
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