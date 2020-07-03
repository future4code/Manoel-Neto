import styled from 'styled-components'

export const OptionContainer = styled.div`
    width: 90%;
    align-self: center;
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 421px) and (max-width: 800px) {
        flex-direction: column;
    }

    @media (min-width: 320px) and (max-width: 420px) {
        flex-direction: column;
    }
`


export const OptionCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #557A95;
    padding: 16px;
    width: 300px;
    height: 200px;
    background: #7395AE;
    border-radius: 16px;
    transform: scale(1.0);
    transition: transform 500ms ease-in-out;

    :hover {
        transform: scale(1.2);
        transition: transform 500ms ease-in-out;
    }

    @media (min-width: 421px) and (max-width: 800px) {
        height: 120px;
    }

    @media (min-width: 320px) and (max-width: 420px) {
        height: 100px;
    }
`

