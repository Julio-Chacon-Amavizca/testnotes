import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Note } from "../components/Note";


// El siguiente test verifica que el componente Note renderice el contenido de la nota y el botón de importancia.
test('renders content', () => {
    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    render(<Note note={note} />)
    const li = screen.getByText(note.content)
    // console.log(prettyDOM(li))
    expect(li).toHaveTextContent('Component testing is done with react-testing-library')
    expect(li).toHaveTextContent('make not important')
})

// El siguiente test verifica que el evento de hacer clic en el botón se dispare una vez.

test('clicking the button calls event handler once', () => {

    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    const mockHandler = jest.fn()
    render(
        <Note note={note} toggleImportance={mockHandler} />
    )

    const button = screen.getByText('make not important')
    // console.log(prettyDOM(button))
    button.click()

    expect(mockHandler).toHaveBeenCalledTimes(1)
})