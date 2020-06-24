import styled from 'styled-components'
import { FormControl } from '@material-ui/core'

export const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
`

export const Title = styled.div`
    height: auto;
    padding: 32px;
`

export const DataContainer = styled(FormControl)`
    width: 400px;
    height: 300px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SingleField = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
`

export const PassworForgotten = styled.div`
    font-size: 12px;
    padding: 8px;
    display: flex;
    justify-content: flex-end
`
