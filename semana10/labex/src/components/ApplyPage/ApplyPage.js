import React from 'react'
import {Typography,
        TextField,
        Select, 
        MenuItem, 
        Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { applyToTrip } from '../API/API'
import { useForm } from '../Hooks/Hooks'
import { countries  } from './Countries'
import { MainContainer, Title, FormContainer, FormItem, ButtonContainer, ActionContainer } from '../../Styled'
import { BackButton } from '../../BackButton'



export function ApplyPage() {

    const history = useHistory()

    const { form, onChange, clear } = useForm({
        name: '',
        age: '',
        reason: '',
        profession: '',
        country: '',
        tripId: ''
    })

    const { tripId } = useParams()
    console.log(tripId)

    const handleInputChange = event => {
        const { name, value } = event.target

        onChange(name, value)
    }

    const reset = () => {
        clear()
    }

    const body = {
        name: form.name,
        age: form.age,
        applicationText: form.reason,
        profession: form.profession,
        country: form.country
    }

    const id = window.localStorage.getItem('idTrip')

    const isValid = () => {
        if((form.name.length >= 3) && (form.age >= 18) && (form.reason.length >= 30) && 
        (form.profession.length >= 10) && (form.country !== '-')){
            applyToTrip(id, history, body)
        } else {
            alert('Preencha corretamente')   
        }
    }

    return(
        <MainContainer>
            <ButtonContainer>
                <BackButton />
            </ButtonContainer>
            <Title>
                <Typography color='secondary' variant='h3'>Formulário de inscrição</Typography>
            </Title>
            <FormContainer>
                <FormItem>

                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Nome</Typography>
                    <TextField 
                        variant='outlined' 
                        name='name'
                        color='secondary'
                        value={form.name} 
                        onChange={handleInputChange}
                        required
                        type='text'
                        inputProps={{pattern: '[a-zA-Z]{3,}'}}
                        error ={(form.name && form.name.length < 3) ? true : false}
                        helperText={form.name && form.name.length < 3 && 'O nome deve ter pelo menos 3 caracteres' }
                    />
                </FormItem>

                <FormItem>
                    
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Idade</Typography>
                    <TextField 
                        variant='outlined' 
                        name='age'
                        color='secondary'
                        value={form.age} 
                        onChange={handleInputChange}
                        required
                        inputProps={{min: 18}}
                        type='number'
                        error ={(form.age && form.age < 18) ? true : false}
                        helperText={form.age && form.age < 18 && 'O candidato deve ser maior de 18.' }
                    />
                </FormItem>

                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Por que voce quer viajar </Typography>
                    <TextField 
                        variant='outlined' 
                        name='reason'
                        color='secondary'
                        value={form.reason} 
                        onChange={handleInputChange}
                        required
                        inputProps={{ pattern: "[a-zA-z]{30,}" }}
                        type='text'
                        error ={(form.reason && form.reason.length < 30) ? true : false}
                        helperText={form.reason && form.reason.length < 30 && 'O motivo deve ter pelo menos 30 caracteres' }
                    />
                </FormItem>

                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Profissão </Typography>
                    <TextField 
                        variant='outlined' 
                        name='profession'
                        color='secondary'
                        value={form.profession} 
                        onChange={handleInputChange}
                        required
                        inputProps={{ pattern: "[a-zA-z]{10,}" }}
                        type='text'
                        error ={(form.profession && form.profession.length < 10) ? true : false}
                        helperText={form.profession && form.profession.length < 10 && 'A profissão deve ter pelo menos 10 caracteres' }
                    />
                </FormItem>

                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >País de residência </Typography>

                    <Select
                        variant='outlined'
                        color='secondary'
                        onChange={handleInputChange}
                        value={form.country}
                        name='country'
                        required
                        error ={(form.country && form.country === '-') ? true : false}
                    >   
                        <MenuItem value='-'>----------------</MenuItem>
                        {countries && countries.map(country => {
                        return <MenuItem key={country.ordem} value={country.nome}>{country.nome}</MenuItem>
                        })}
                    </Select>
                </FormItem>

                <ActionContainer>
                    <Button 
                        size='medium' 
                        color='secondary' 
                        type='reset' 
                        style={{width: '100px', right: '8px'}}
                        onClick={reset}
                    >Limpar</Button>

                    <Button 
                        size='medium' 
                        color='secondary' 
                        variant='contained' 
                        style={{width: '100px'}}
                        onClick={() => isValid()}
                    >Inscrever</Button>
                </ActionContainer>
            </FormContainer>
        </MainContainer>
    )
}