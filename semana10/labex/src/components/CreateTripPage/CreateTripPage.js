import React from 'react'
import {Typography,
        TextField,
        Select, 
        MenuItem, 
        Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { createTrip } from '../API/API'
import { useForm } from '../Hooks/Hooks'
import { MainContainer, Title, FormContainer, FormItem, ButtonContainer, ActionContainer } from '../../Styled'
import { BackButton } from '../../BackButton'



export function CreateTripPage() {

    const history = useHistory()

    const planets = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

    const { form, onChange, clear } = useForm({
        tripName: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target

        onChange(name, value)
    }

    const reset = () => {
        clear()
    }

    const isValid = () => {
        if((form.tripName.length >= 5) && (form.planet !== '-') && (form.description.length >= 30) && (form.duration >= 50)){
            createTrip('trips', history, body)
        } else {
            alert('Preencha corretamente')   
        }
    }

    const body = {
        name: form.tripName,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.duration
    }

    

    return(
        <MainContainer>
            <ButtonContainer>
                <BackButton />
            </ButtonContainer>
            <Title>
                <Typography color='secondary' variant='h3'>Cadastrar nova aventrua!</Typography>
            </Title>
            <FormContainer>
                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Título da viagem</Typography>
                    <TextField 
                        variant='outlined' 
                        name='tripName'
                        color='secondary'
                        value={form.tripName} 
                        onChange={handleInputChange}
                        required
                        type='text'
                        inputProps={{pattern: '[a-zA-Z]{5,}'}}
                        error ={(form.tripName && form.tripName.length < 5) ? true : false}
                        helperText={form.tripName && form.tripName.length < 5 && 'O titulo deve ter pelo menos 5 caracteres' }
                    />
                </FormItem>

                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Planeta de destino </Typography>

                    <Select
                        variant='outlined'
                        color='secondary'
                        onChange={handleInputChange}
                        value={form.planet}
                        name='planet'
                        required
                        error ={(form.planet && form.planet === '-') ? true : false}
                    >   
                        <MenuItem value='-'>----------------</MenuItem>
                        {planets && planets.map(planet => {
                        return <MenuItem key={planet} value={planet}>{planet}</MenuItem>
                        })}
                    </Select>
                </FormItem>
                
                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Data </Typography>
                    <TextField 
                        variant='outlined' 
                        name='date'
                        color='secondary'
                        value={form.date} 
                        onChange={handleInputChange}
                        required
                        type='date'
                    />
                </FormItem>

                <FormItem>
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Descrição </Typography>
                    <TextField 
                        variant='outlined' 
                        name='description'
                        color='secondary'
                        value={form.description} 
                        onChange={handleInputChange}
                        required
                        inputProps={{ pattern: "[a-zA-z]{30,}" }}
                        type='text'
                        error ={(form.description && form.description.length < 30) ? true : false}
                        helperText={form.description && form.description.length < 30 && 'A descrição deve ter pelo menos 30 caracteres' }
                    />
                </FormItem>

                <FormItem>
                    
                    <Typography
                        variant='body1' 
                        color='secondary'
                    >Duração</Typography>
                    <TextField 
                        variant='outlined' 
                        name='duration'
                        color='secondary'
                        value={form.duration} 
                        onChange={handleInputChange}
                        required
                        inputProps={{min: 50}}
                        type='number'
                        error ={(form.duration && form.duration < 50) ? true : false}
                        helperText={form.duration && form.duration < 50 && 'No minimo 50 dias.' }
                    />
                </FormItem>

                <ActionContainer>
                    <Button 
                        size='medium' 
                        color='secondary' 
                        type='reset' 
                        style={{width: '100px', right: '8px'}}
                        onClick={reset}
                    >limpar</Button>

                    <Button 
                        size='medium' 
                        color='secondary' 
                        variant='contained' 
                        style={{width: '100px'}}
                        onClick={() => isValid()}
                    >Criar</Button>
                </ActionContainer>
            </FormContainer>
        </MainContainer>
    )
}