import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import { render, fireEvent, wait } from '@testing-library/react';

describe('apagar teste', () => {
    test('apagar post existente', async() => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const addButton = getByText(/Adicionar/i)
        const inputArea = getByPlaceholderText(/Novo Post/i)

        fireEvent.change(inputArea, {target: {value: 'Esse post será apagado'}})
        fireEvent.click(addButton)

        const post = getByText(/esse post será apagado/i)

        const deleteButton = getByText(/Apagar/i)
        fireEvent.click(deleteButton)

        await wait(() => {
            expect(post).not.toBeInTheDocument()
        })
        
    })
})