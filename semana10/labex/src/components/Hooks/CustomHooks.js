import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export function useToken(){
    const history = useHistory()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('info')) && JSON.parse(localStorage.getItem('info'))[0].token

        if(token === null ) {
            history.push('/')
        }
    }, [history])
}

export function componentDidMount(title){
    document.title = document.title + ' | ' + title
}