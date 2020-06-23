import React from 'react'
import { MainContainer, OptionContainer, WelcomeContainer, OptionCard } from './Styled'
import { Typography } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'


export function HomePage() {

    const history = useHistory()
    
    const goToLoginPage = () => {
        history.push('/login')
    }
    
    const goToTripsList = () => {
        history.push('/trips')
    }

    return(
        <MainContainer>
            <WelcomeContainer>
                <Typography variant='h3' color='secondary'>Bem vindx à missão Labex!</Typography>
                <Typography variant='h5' align='center' color='secondary'>Estamos muitos felizes em te você com a gente, por favor, escolha o perfil em que voce melhor se encaixa.</Typography>
            </WelcomeContainer>

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