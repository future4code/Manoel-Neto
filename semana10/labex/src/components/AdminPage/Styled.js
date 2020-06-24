import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 32px;
`

export const GreetingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    margin: 0 32px;
`

export const ActionContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ActionCard = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
`