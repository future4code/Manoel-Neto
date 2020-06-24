import React from 'react'
import { useToken } from '../Hooks/CustomHooks'
import { useHistory } from 'react-router-dom'
import { Container, ActionContainer, GreetingContainer, ActionCard } from './Styled'
import { Typography, Button } from '@material-ui/core'

export function AdminPage() {

    const history = useHistory()

    useToken()

    const name = JSON.parse(localStorage.getItem('info'))[0].email

    const clear = () => {
        localStorage.removeItem('info')
        history.push('/login')
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
        <Container>
            <GreetingContainer>
                <Typography>Bem vindo, {name}  </Typography>
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

        </Container>
    )
}