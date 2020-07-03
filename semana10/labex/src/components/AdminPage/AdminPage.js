import React from 'react'
import { useHistory } from 'react-router-dom'
import { ActionContainer, GreetingContainer, ActionCard } from './Styled'
import { Typography, Button } from '@material-ui/core'
import { MainContainer } from '../../Styled'

export function AdminPage() {

    const history = useHistory()

    const clear = () => {
        localStorage.removeItem('token')
        history.replace('/login')
    }

    const goToCreatePage = () => {
        history.push('/trips/create/')
    }

    const goToSubscribersPage = () => {
        history.push('trips/subscribed/')
    }

    const goToList = () => {
        history.push('trips/list')
    }

    return(
        <MainContainer>
            <GreetingContainer>
                <Typography>Bem vindo,</Typography>
                <Button variant='contained' color='secondary' size='medium' onClick={clear}>Logout</Button>
            </GreetingContainer>

            <ActionContainer>
                <ActionCard onClick={goToList}>
                    Ver lista de viagens
                </ActionCard>
                <ActionCard onClick={goToCreatePage}>
                    Criar nova viagem
                </ActionCard>
                <ActionCard onClick={goToSubscribersPage}>
                    Viagens com candidatos
                </ActionCard>
            </ActionContainer>

        </MainContainer>
    )
}