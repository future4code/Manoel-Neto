import React from 'react'
import { TripsCard } from './TripsCard'
import { TripsGridContainer, TripsContainer, TripsLogo } from './Styled'
import { Typography } from '@material-ui/core'

export function TripsGrid() {

    return(
        <TripsContainer>
            <TripsLogo>
                <Typography variant='h4'>Confira nossas viagens</Typography>
            </TripsLogo>
            <TripsGridContainer>
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
                <TripsCard />
            </TripsGridContainer>
            </TripsContainer>
    )
}