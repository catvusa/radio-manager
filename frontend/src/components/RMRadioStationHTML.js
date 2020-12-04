import React, { Component } from "react"
import RMNameHTML from "./RMNameHTML"
import RMMultimediaHTML from "./RMMultimediaHTML"
import RMPlayerHTML from "./RMPlayerHTML"

export default class RMRadioStationHTML extends Component
{
	constructor()
	{
		super()
		
		this.state =
		{
			name: "Radio Classic",
			playing: false,
		}
	} // CONSTRUCTOR
	
	render()
	{
		return (
			<div id="rm-radio-station">
				<RMNameHTML name={ this.state.name } />
				<RMMultimediaHTML />
				<RMPlayerHTML />
			</div>
		)
	} // RENDER
} // RM RADIO STATION HTML