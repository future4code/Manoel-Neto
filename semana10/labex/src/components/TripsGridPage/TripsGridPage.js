import React from 'react'
import { TripsCard } from './TripsCard'
import { GridContainer } from './Styled'
import { Typography, CircularProgress, Button  } from '@material-ui/core'
import { useRequestData } from '../API/API'
import { Skeleton } from '@material-ui/lab'
import { MainContainer, Title, ButtonContainer } from '../../Styled'
import { BackButton } from '../../BackButton'


export function TripsGridPage() {

    const token = window.localStorage.getItem('token')

    const trips = useRequestData(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/manoel-queiroz/trips',
        []
    )
    
    const length = !trips.length

    return(
        <MainContainer>
            <ButtonContainer>
                <BackButton />
            </ButtonContainer>
            <Title>
                <Typography align='center' variant='h4' color='secondary'>{token === null ? 'Confira nossas viagens' : 'Viagens Cadastradas'}</Typography>
            </Title>
            <GridContainer length={length}>
                {length && <CircularProgress color='secondary' />}
                {trips && trips.map((trip) => {
                    return <TripsCard key={trip.id} tripInfo={trip} />
                })}
            </GridContainer>
        </MainContainer>
    )
}