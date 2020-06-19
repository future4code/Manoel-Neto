import React from 'react'
import { PageContainer, MainTitle, ButtonChange, Wrap } from './Styled'

export class MainPage extends React.Component{

    render() {
        return(
            <PageContainer>
                <MainTitle>Vamos brincar de API?</MainTitle>
                    <Wrap>
                        <ButtonChange onClick={this.props.changeHarry}>Harry Potter</ButtonChange>
                        <ButtonChange onClick={this.props.changePostal}>Endereço</ButtonChange>
                    </Wrap>
            </PageContainer>
        )
    }
}