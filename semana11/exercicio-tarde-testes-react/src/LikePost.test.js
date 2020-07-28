import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import { render, fireEvent, wait } from '@testing-library/react';

describe('curtir teste', () => {
    test('curtir post existente', async() => {
        const { getByText, getByPlaceholderText, getByTestId } = render(<App />)

        const addButton = getByText(/Adicionar/i)
        const inputArea = getByPlaceholderText(/Novo Post/i)

        fireEvent.change(inputArea, {target: {value: 'Curtir esse post'}})
        fireEvent.click(addButton)

        const likeButton = getByTestId('like-button')
        fireEvent.click(likeButton)

        const unlikeButton = getByTestId('like-button')

        await wait(() => {
            expect(unlikeButton).toHaveTextContent('Descurtir')
        })
        
    })
})