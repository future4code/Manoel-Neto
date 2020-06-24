import React, { useState } from 'react'
import { LoginContainer, DataContainer, SingleField, PassworForgotten, Title, ContainerAll } from './Styled'
import { Button, TextField, Typography , IconButton, OutlinedInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { handleLogin } from '../API/API'
import { useHistory } from 'react-router-dom'
import { componentDidMount } from '../Hooks/CustomHooks'

export function LoginPage(){

    const history = useHistory()

    componentDidMount('Login')

    const [ email, setMail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    

    const body = {
        email: email,
        password: password
    }

    return(
        <LoginContainer>
            <Title>
                <Typography variant='h4' color='secondary'>Faça o Login</Typography>
            </Title>
            
            <DataContainer>
                <SingleField>
                    <Typography color='secondary' style={{padding: '8px 0'}}>Email</Typography>
                    <TextField name='email' variant='outlined' color='secondary' value={email} onChange={e => setMail(e.target.value)} />
                </SingleField>
                <SingleField>
                    <Typography color='secondary' style={{padding: '8px 0'}}>Senha</Typography>
                    <OutlinedInput 
                        color='secondary'
                        type={showPassword? 'text' : 'password'} 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        endAdornment={
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={e => e.preventDefault()}
                                color='secondary'
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        }
                    />
                    <PassworForgotten>
                        <Typography variant='caption' color='secondary'>Esqueci a senha</Typography>
                    </PassworForgotten> 
                </SingleField>
                    
                <SingleField>
                    <Button variant='contained' size='large' color='secondary' onClick={() => handleLogin(history, body)}>Entrar</Button>
                </SingleField>
            </DataContainer>

        </LoginContainer>
    )
}