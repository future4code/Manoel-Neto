import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 400px;
    height: 300px;
`
export const MainTitle = styled.h2`
    color: white;
    align-self: flex-basis;
`
export const SelectionMenu = styled.select`
    width: 200px;
    border: #7303fc 1px solid;
    background: #7303fc;
    border-radius: 0px;
    color: white;
    font-size: 12px;
`

export const InputCep = styled.input`
    width: 200px;
    padding: 5px 5px;
    color: white;
    background: #7303fc;
    border: none;
    outline: none;
`

export const Search = styled.button`
    background: white;
    margin: 5px 0px;
`