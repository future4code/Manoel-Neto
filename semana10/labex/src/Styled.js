import styled from 'styled-components'
import { FormControl } from '@material-ui/core'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
    background: #eff3f5;
`

export const MainContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px;
`

export const Title = styled.div`
    margin: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 55%;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 600px;
    justify-content: space-between;

    @media (min-width: 1201px) {
        width: 40%;
    }

    @media (min-width: 801px) and (max-width: 1200px) {
        width: 40%;
    }
    @media (min-width: 421px) and (max-width: 800px) {
        width: 80%;
    }

    @media (min-width: 320px) and (max-width: 420px) {
        min-width: 200px;
    }
`

export const FormItem = styled(FormControl)`
    width: 100%;
    padding-bottom: 8px;

    @media (min-width: 1201px) {

    }

    @media (min-width: 801px) and (max-width: 1200px) {

    }
    @media (min-width: 421px) and (max-width: 800px) {

    }

    @media (min-width: 320px) and (max-width: 420px) {

    }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin: 0 32px;

    Button {
        opacity: 50%;
        transition: 500ms ease-in-out;

        :hover{
        opacity: 100%;
        transition: 500ms ease-in-out;
        }
    }
`

export const ActionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`