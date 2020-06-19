import axios from 'axios'

export const handleAddress = (postalCode) => {
    axios.get(`https://viacep.com.br/ws/${postalCode}/json/`).then((response) => {
        
    }).catch((e)=> {
        this.setState({errorMessage: "Ocorreu um erro."})
    })

}