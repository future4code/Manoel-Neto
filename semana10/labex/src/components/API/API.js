import axios from 'axios'
import { useState, useEffect } from 'react'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/manoel-queiroz'

export function useRequestData(url, initialState) {
    
    const [ data, setData ] = useState(initialState)
    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data.trips)
        })
    }, [url])
    
    return data
}

export const handleLogin = async(useHistory, body) => {

    const history = useHistory

    try {
        const response = await axios.post(`${baseUrl}/login`, body)

        window.localStorage.setItem("token", response.data.token);

        history.push('/adm')
        
        alert('Login feito com sucesso')
        
    } catch (error){
        alert('Algo deu errado. Desculpe o transtorno.')
    }
}

export const createTrip = async(url, useHistory, body) => {
    
    const token = window.localStorage.getItem('token')
    const axiosConfig = {
        headers:  {
            auth: token
        }
    }

    const history = useHistory
    try{
        await axios.post(`${baseUrl}/${url}`, body, axiosConfig)
        alert('Aventura criada com sucesso.')
        history.push('/adm')
    } catch(e) {
        alert('Um ou mais campos estao em branco')
    }
}

export const applyToTrip = async(id, useHistory, body) => {

    const history = useHistory
    try{
        await axios.post(`${baseUrl}/trips/${id}/apply`, body )
        alert('Parabéns, voce se inscreveu para essa aventura. Agora é so aguardar e torcer pra ser selecionadx.')
        history.push('/trips/list')
    } catch(e) {
        alert('Um ou mais campos estao em branco')
    }
}

export function useGetTipDetails(id, initialState) {
    const [ details, setDetails ] = useState(initialState)

    const token = window.localStorage.getItem('token')
    const axiosConfig = {
        headers:  {
            auth: token
        }
    }

    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/manoel-queiroz/trip/${id}`, axiosConfig).then(response => {
            setDetails(response.data.trip)
        })
    }, [])

    return details
}

export function makeDecision(tripId, candidateId, choice) {

    const token = window.localStorage.getItem('token')

    const body = {
        approve: choice
    }
    const axiosConfig = {
        headers:  {
            auth: token
        }
    }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/manoel-queiroz/trips/${tripId}/candidates/${candidateId}/decide`, body, axiosConfig).then(response => {
            
        })

}