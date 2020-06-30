import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import { render, fireEvent, wait } from '@testing-library/react';

describe('criar novo post e limpa-lo depois', () => {
    test('Post comprar agua', async() => {
        const { getByText, getByPlaceholderText} = render(<App />)

        const addButton = getByText('Adicionar')
        const inputArea = getByPlaceholderText('Novo post')

        fireEvent.change(inputArea, {target: {value: 'Comprar água'}})
        fireEvent.click(addButton)

        const post = getByText('Curtir')

        await wait(() => {
            expect(post).toHaveTextContent('Curtir')
        })   
    })
})

describe('Limpar campo apos post criado', () => {
    test('campo de input limpo', async() => {
        const { getByText, getByPlaceholderText} = render(<App />)

        const inputArea = getByPlaceholderText('Novo post')
        const addButton = getByText('Adicionar')
        
        fireEvent.change(inputArea, {target: {value: 'Comprar água'}})
        fireEvent.click(addButton)

        const newInputValue = getByPlaceholderText('Novo post')

        await wait(() => {
            expect(newInputValue).toHaveTextContent('')
        })
        
    })
})

describe('Lista de post vazia', () => {
    test('lista vazia', async() => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const addButton = getByText('Adicionar')
        const inputArea = getByPlaceholderText('Novo post')

        fireEvent.change(inputArea, {target: {value: 'Comprar água'}})
        fireEvent.click(addButton)

        const post = getByText('Curtir')

        await wait(() => {
            expect(post).not.toHaveTextContent('Nenhum post cadastrado')
        })
        
    })
})

describe('Quantidade de post', () => {
    test('quantidade', async() => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const addButton = getByText('Adicionar')
        const inputArea = getByPlaceholderText('Novo post')

        fireEvent.change(inputArea, {target: {value: 'Comprar água'}})
        fireEvent.click(addButton)

        const contadorTexto = getByText(/quantidade/i)

        await wait(() => {
            expect(contadorTexto).toHaveTextContent(/Quantidade de posts:/i)
        })
        
    })
})

describe('Tentar escrever um texto vazio', () => {
    test('texto vazio', async() => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const addButton = getByText('Adicionar')
        const inputArea = getByPlaceholderText('Novo post')

        fireEvent.change(inputArea, {target: {value: ''}})
        fireEvent.click(addButton)

        const emptyText = getByText(/Voce nao pode postar em branco/i)

        await wait(() => {
            expect(emptyText).toHaveTextContent(/Voce nao pode postar em branco/i)
        })
        
    })

    test('texto vazio', async() => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const addButton = getByText('Adicionar')
        const inputArea = getByPlaceholderText('Novo post')

        fireEvent.change(inputArea, {target: {value: 'manoel'}})
        fireEvent.click(addButton)

        const emptyText = getByText(/manoel/i)

        await wait(() => {
            expect(emptyText).not.toHaveTextContent(/Voce nao pode postar em branco/i)
        })
        
    })
})