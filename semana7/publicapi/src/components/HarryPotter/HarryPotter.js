import React from 'react'
import { PageContainer, MainTitle, SelectionMenu } from './Styled'

export class HarryPotter extends React.Component{

    render() {
        return(
            <PageContainer>
                <MainTitle>Qual API você quer testar hoje?</MainTitle>
                <SelectionMenu>
                    <option value= '0' onChange={this.setPageNumber}> </option>
                    <option value= '1' onChange={this.setPageNumber} >Harry Potter</option>
                    <option value= '2' onChange={this.setPageNumber} >Cep</option>
                </SelectionMenu>
            </PageContainer>
        )
    }
}