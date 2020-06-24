import axios from 'axios'
import { useState, useEffect } from 'react'

export function useRequestData(url, initialState) {
    const [ data, setData ] = useState(initialState)
    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data.trips)
        })
    }, [url])
    
    return data
}

export const handleLogin = (useHistory, body) => {

    const history = useHistory
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/manoel-queiroz/login', body).then(response =>{
        const userInfo = [{
            token: response.data.token,
            email: response.data.user.email
        }]
        
        window.localStorage.setItem('info', JSON.stringify(userInfo))

        history.push('/adm')
        alert('Login feito com sucesso')

    }).catch(e => {
        alert('Houve um erro ao fazer o login.')
    })
}