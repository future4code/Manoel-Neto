import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {
	
	state = {
		facebook: "Facebook",
		instagram: "Instagram",
		twitter: "Twitter"
	}

	aoCompartilhar = (state) => {
		state.forEach((st, idx, arr) => {
			if(st.facebook ==- this.state.facebook){
				console.log("ola")
			} else{
				console.log("caguei")
			}
		})
	  }

	render() {
		return <div className={'sharing-container'}>
            <button onClick={this.aoCompartilhar} value="facebook">{this.state.facebook}</button>
            <button onClick={this.aoCompartilhar} value="instagram">{this.state.instagram}</button>
			<button onClick={this.aoCompartilhar} value="twitter">{this.state.twitter}</button>
		</div>
	}
}
