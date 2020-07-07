import React from "react";
import {
  render,
  wait
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";
import axios from 'axios'
import userEvent from '@testing-library/user-event'

const createTask = (text, day) => {
  const utils = render(<App />)

  const input = utils.getByPlaceholderText(/digite aqui sua tarefa/i)
  const select = utils.getByTestId('select')
  const button = utils.getByText(/criar/i)

  userEvent.type(input, text)
  userEvent.selectOptions(select, utils.getByText(day).value)
  userEvent.click(button)

  return utils
}

describe('Renderizacao inicial', () => {

  test('Renderiza tudo corretamente', () => {

    const utils = render(<App />)

    const input = utils.getByPlaceholderText('Digite aqui sua tarefa')
    const button = utils.getByText('Criar')
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(utils.getByText(/Sabadox/i)).toBeInTheDocument()
    expect(utils.getByText(/Domingox/i)).toBeInTheDocument()

  })
})

describe('Criar e deletar tarefas no sabado', () => {
  test('Criar tarefa sabado', async() => {
    const utils = createTask('teste sabado', 'Sabado')

    const task = await utils.findByText(/teste sabado/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Deletar tarefa de sabado', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-sabado')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/teste sabado/)).toBeNull()) 
  })
})

describe('Criar e deletar tarefas no domingo', () => {
  test('Criar tarefa domingo', async() => {
    const utils = createTask('teste domingo', 'Domingo')

    const task = await utils.findByText(/teste domingo/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Deletar tarefa de domingo', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-domingo')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/teste domingo/)).toBeNull()) 
  })
})

describe('Criar e deletar tarefas na segunda', () => {
  test('Criar tarefa segunda', async() => {
    const utils = createTask('teste segunda', 'Segunda-feira')

    const task = await utils.findByText(/teste segunda/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Deletar tarefa de segunda', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-segunda')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/teste segunda/)).toBeNull()) 
  })
})

describe('Criar e deletar tarefas na quarta', () => {
  test('Criar tarefa quarta', async() => {
    const utils = createTask('teste quarta', 'Quarta-feira')

    const task = await utils.findByText(/teste quarta/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Deletar tarefa de quarta', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-quarta')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/teste quarta/)).toBeNull()) 
  })
})

describe('Criar e deletar tarefas na quinta', () => {
  test('Criar tarefa quinta', async() => {
    const utils = createTask('teste quinta', 'Quinta-feira')

    const task = await utils.findByText(/teste quinta/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Deletar tarefa de quinta', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-quinta')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/teste quinta/)).toBeNull()) 
  })
})

describe('Criar e atualizar e deletar tarefas na Sexta', () => {
  test('Criar tarefa sexta', async() => {
    const utils = createTask('teste sexta', 'Sexta-feira')

    const task = await utils.findByText(/teste sexta/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Atualizar tarefa de sexta', async() => {
    const utils = render(<App />)

    const edit = await utils.findByTestId('update-sexta')
    const button = utils.getByText(/Criar/)
    const input = utils.getByPlaceholderText(/Digite aqui sua/i)
    const select = utils.getByTestId('select')

    userEvent.click(edit)
    expect(button).toHaveTextContent(/Atualizar/)
    expect(input).toHaveValue('teste sexta')
    expect(select).toHaveValue('6')

    userEvent.type(input, 'novo teste sexta')
    userEvent.click(button)

    const task = await utils.findByText('novo teste sexta')
    expect(task).toBeInTheDocument
  })

  test('Deletar tarefa de sexta', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-sexta')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/novo teste sexta/)).toBeNull()) 
  })
})

describe('Criar e atualizar e deletar tarefas na terça', () => {
  test('Criar tarefa terça', async() => {
    const utils = createTask('teste terca', 'Terça-feira')

    const task = await utils.findByText(/teste terca/i)
    expect(task).toBeInTheDocument()
    await expect(utils.getByPlaceholderText(/digite aqui/i)).toHaveValue('')
  })

  test('Atualizar tarefa de terca', async() => {
    const utils = render(<App />)

    const edit = await utils.findByTestId('update-terca')
    const button = utils.getByText(/Criar/)
    const input = utils.getByPlaceholderText(/Digite aqui sua/i)
    const select = utils.getByTestId('select')

    userEvent.click(edit)
    expect(button).toHaveTextContent(/Atualizar/)
    expect(input).toHaveValue('teste terca')
    expect(select).toHaveValue('3')

    userEvent.type(input, 'novo terca sexta')
    userEvent.click(button)

    const task = await utils.findByText('novo terca sexta')
    expect(task).toBeInTheDocument
  })

  test('Deletar tarefa de sexta', async() => {
    const utils = render(<App />)

    const task = await utils.findByTestId('delete-terca')
    userEvent.click(task)

    await wait(() => expect(utils.queryByText(/novo teste terca/)).toBeNull()) 
  })
})
