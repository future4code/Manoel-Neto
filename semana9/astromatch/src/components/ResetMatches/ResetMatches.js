import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Button} from '@material-ui/core'

const ResetContainer = styled.div`
    display: flex;
    margin: 10px;
`

function ResetMatches(props){

    const clearMatches = () => {
        axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/manoelneto/clear')
        .then(response => {
            alert('Limpado com sucesso')
            props.getMatches()
        }) 
        .catch(e => {
            alert('Houve um erro ao limpar a sua lista de matches.')
        }) 
    }

    return(
        <ResetContainer>
            <Button color='primary' variant='contained' onClick={clearMatches}>Limpar matches</Button>
        </ResetContainer>
    )
}
export default ResetMatches;