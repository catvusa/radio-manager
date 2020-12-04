import React, { Component } from "react"

export default class RMNameHTML extends Component
{
	render()
	{
		return (
			<div id="rm-radio-station-name-field" style={{ display: this.props.name ? "block" : "none" }}>
				<span id="rm-radio-station-name">{ this.props.name }</span>
			</div>
		)
	} // RENDER
} // RM NAME HTML