import React from 'react'
import { TripsCard } from './TripsCard'
import { GridContainer, TripsContainer, TripsLogo, ButtonContainer } from './Styled'
import { Typography, CircularProgress, Button  } from '@material-ui/core'
import { useRequestData } from '../API/API'
import { Skeleton } from '@material-ui/lab'

export function TripsGridPage() {

    const trips = useRequestData(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/manoel-queiroz/trips',
        []
    )
    
    const length = !trips.length

    return(
        <TripsContainer>
            <TripsLogo>
                <Typography variant='h4' color='secondary'>Confira nossas viagens</Typography>
            </TripsLogo>
            <GridContainer length={length}>
                {length && <CircularProgress color='secondary' />}
                {trips && trips.map((trip) => {
                    return <TripsCard key={trip.id} tripInfo={trip} />
                })}
            </GridContainer>
            <ButtonContainer>
                <Button color='secondary' size='large' variant='contained' style={{opacity: '50%'}} >Voltar</Button>
            </ButtonContainer>
        </TripsContainer>
    )
}