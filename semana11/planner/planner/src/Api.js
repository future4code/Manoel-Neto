import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-manoel-queiroz'

export const sendData = async(body) => {
    await axios.post(`${baseUrl}`, body).then(response => {
    })
}

export const useRequestData = () => {
    const [ data, setData] = useState([])

    const getAllTasks = async() => {
        const response = await axios.get(`${baseUrl}`)
        setData(response.data)
    }

    useEffect(() => {
        getAllTasks()
    }, [])

    return [ data, getAllTasks ]
}

export const deleteData = async(id) => {
    await axios.delete(`${baseUrl}/${id}`).then(response => {

    })
}

export const updateTask = async(id, body) => {
    await axios.put(`${baseUrl}/${id}`, body).then(response => {
    })
}