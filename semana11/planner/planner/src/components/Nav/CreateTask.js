import React from 'react'
import { NavContainer } from './Styled'

const weekDays = [
    {
        value: 1 ,
        weekDay: 'Domingo' 
    },
    {
        value: 2 ,
        weekDay: 'Segunda-feira' 
    },
    {
        value: 3 ,
        weekDay: 'Terça-feira' 
    },
    {
        value: 4 ,
        weekDay: 'Quarta-feira' 
    },
    {
        value: 5 ,
        weekDay: 'Quinta-feira' 
    },
    {
        value: 6 ,
        weekDay: 'Sexta-feira' 
    },
    {
        value: 7 ,
        weekDay: 'Sabado' 
    }
]

const CreateTaskBar = (props) => {

    const body = {
        text: props.form.text,
        day: props.form.day
    }

    return(
        <NavContainer>
            <input name='text' value={props.form.text} onChange={props.handleChange}  placeholder='Digite aqui sua tarefa' required/>
            <select data-testid={'select'} value={props.form.day} name='day' onChange={props.handleChange} required>
                <option></option>
                <option disabled>-------------</option>
                {weekDays && weekDays.map(day => {
                    return <option key={day.value} value={day.value}>{day.weekDay}</option>})}
            </select>
            <button onClick={() => props.click(body)}>{props.updateStatus ? 'Criar' : 'Atualizar'}</button>
        </NavContainer>
    )
}

export default CreateTaskBar