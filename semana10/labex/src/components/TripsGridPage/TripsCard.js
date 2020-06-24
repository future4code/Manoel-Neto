import React from 'react'
import { CardContainer } from './Styled'
import { Typography, Button } from '@material-ui/core'
import { AddRounded} from '@material-ui/icons'

export function TripsCard(props) {

    const info = props.tripInfo

    return(
        <CardContainer>
            <Typography align ='center' variant='' color=''>{info.name}</Typography>
            <Typography align ='justify' variant='' color=''>Sobre: {info.description}</Typography>
            <Typography align ='right' variant='' color=''>Planeta: {info.planet}</Typography>
            <Button variant='contained' color='secondary'><AddRounded />informações</Button>
        </CardContainer>
    )
}