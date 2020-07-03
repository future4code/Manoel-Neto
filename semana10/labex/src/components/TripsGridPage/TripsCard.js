import React from 'react'
import { CardContainer } from './Styled'
import { Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export function TripsCard(props) {
    const token = window.localStorage.getItem('token')

    const history = useHistory()

    const goToPage = (id) => {

        if(token === null) {
            history.push(`/trips/${id}/apply`)
        } else {
            history.push(`/trips/details/${id}`)
        }
    }

    const info = props.tripInfo

    return(
        <CardContainer>
            <Typography align ='center' variant='' color=''>{info.name}</Typography>
            <Typography align ='justify' variant='' color=''>Sobre: {info.description}</Typography>
            <Typography align ='right' variant='' color=''>Planeta: {info.planet}</Typography>
            <Button variant='contained' color='secondary' onClick={() => goToPage(info.id)}>{token !== null ? 'Inscritos' :'Inscrever'}</Button>
        </CardContainer>
    )
}