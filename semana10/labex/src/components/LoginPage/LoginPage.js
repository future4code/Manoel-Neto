import React from 'react'
import { LoginContainer, DataContainer, SingleField, PassworForgotten} from './Styled'
import { Button, TextField, InputLabel } from '@material-ui/core'



export function LoginPage(){
    return(
        <LoginContainer>
            <DataContainer>
                <SingleField>
                    <InputLabel style={{padding: '8px 0'}}>Email</InputLabel>
                    <TextField variant='outlined' color='secondary'/>
                </SingleField>

                <SingleField>
                    <InputLabel style={{padding: '8px 0'}}>Senha</InputLabel>
                    <TextField variant='outlined' color='secondary'/>
                    <PassworForgotten>
                        Esqueci a senha
                    </PassworForgotten> 
                </SingleField>
                
                <SingleField>
                    <Button variant='contained' size='large' color='secondary'>Entrar</Button>
                </SingleField>
            </DataContainer>
        </LoginContainer>
    )
}