import styled from 'styled-components'

export const CandidateContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-rows: 1fr;
    margin: 16px 0;
`

export const CandidateItem = styled.div`
    display: flex;
    width: 800px;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-radius: 5px;
    background: white;
    box-shadow: 2px 2px 5px black;
    height: 100px;
`

export const InfoItem = styled.div`
    flex-direction: column;
    flex: 1;
    flex-wrap: wrap;
    padding: 8px;
`

export const SingleInfo = styled.div`
    padding: 8px;
`

export const DecisionContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 80px;
`

export const Status = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 800px;

    p{
        font-size: 24px;
    }
`