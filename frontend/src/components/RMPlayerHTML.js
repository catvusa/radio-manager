import React, { Component } from "react"

/**
 * Create HTML output using React components.
 */
export default class RMPlayerHTML extends Component
{
	render()
	{
		return (
			<div id="rm-radio-station-name-field" style={{ display: this.props.name ? "block" : "none" }}>
				<span id="rm-radio-station-name">{ this.props.name }</span>
			</div>
		)
	} // RENDER
} // RM PLAYER HTML


/*
namapovat jednotlive udaje o pisnicce/hudebnikovi na externi zdroj pomoci map
*/
