import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }

return(
    <Button color='secondary' size='medium' onClick={goBack}>Voltar</Button>
)
}
