import React from 'react'
import { OptionContainer, OptionCard } from './Styled'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { MainContainer, Title } from '../../Styled'


export function HomePage() {

    const history = useHistory()
    
    const goToLoginPage = () => {
        history.push('/login')
    }
    
    const goToTripsList = () => {
        history.push('/trips/list')
    }

    return(
        <MainContainer>
            <Title>
                <Typography variant='h3' color='secondary' >Bem vindx à missão Labex!</Typography>
                <Typography variant='h5' color='secondary'>Estamos muitos felizes em te você com a gente, por favor, escolha o perfil em que voce melhor se encaixa.</Typography>
            </Title>

            <OptionContainer>
                
                <OptionCard onClick={goToTripsList}>
                    <Typography color='primary' variant='h5'>YEAH, AVENTUREIRO</Typography>
                    <Typography variant='subtitle1'>hehe</Typography>
                </OptionCard>

                <OptionCard onClick={goToLoginPage}>
                    <Typography color='primary' variant='h5'>NAH, ADM</Typography>
                    <Typography variant='subtitle1'>hehe</Typography>
                </OptionCard>

            </OptionContainer>

        </MainContainer>
    )
}