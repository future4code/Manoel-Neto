import styled from 'styled-components'

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: black;
`
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
`
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;
    min-height: 8vh;
`

export const LogoContainer = styled.div`
    color: white;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LogoSubContainer = styled.div`
    display: flex;
    width: 300px;
    justify-content: center;
    
`
export const MenuContainer = styled.div`
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

export const Title = styled.h1`
    color: white;
    font-family: 'Mr Dafoe';
    font-size: 64px;
`

export const Moto = styled.p`
    display: flex;
    flex-grow: 1;
    color: #fc8003;
`
export const MenuList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 400px;
`
export const MenuItem = styled.li`

    :hover {
        color: #fc8003;
        cursor: pointer;
    }
`