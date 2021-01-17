import React, { Component } from "react"

import RMInfoField from "./player/RMInfoField"
import RMIconField from "./player/RMIconField"

/**
 * Represent a visual player of the radio station.
 * @extends Component
 */
export default class RMRadioPlayer extends Component
{
  /**
   * Show the information (if the user
   * has already started the radio station).
   */
  showInfo()
  {
    // The radio station must be on
    if ( this.props.radioOn )
    {
      return (
        <RMInfoField
          musicianCaption={ this.props.musicianCaption }
          recordCaption={ this.props.recordCaption }

          recordData={ this.props.recordData }
        />
      )
    } // if

    return null
  } // SHOW INFO

  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    return (
      <div id="rm-radio-player-field" className="d-flex row align-items-center no-gutters">
        
        <RMIconField
          radioPlay={ this.props.radioPlay }
          setRadioPlay={ this.props.setRadioPlay }
        />

        { this.showInfo() }
		
      </div>
    )
  } // RENDER
} // RM RADIO PLAYER
