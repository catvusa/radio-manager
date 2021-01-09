import React, { Component } from "react"

/**
 * Represent a name of the radio station.
 * @extends Component
 */
export default class RMRadioName extends Component
{
  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    if ( this.props.radioName )
    {
      return (
        <div id="rm-radio-name-field">
          <span>{ this.props.radioName }</span>  
        </div>
      )
    } // if

    return null
  } // RENDER
} // RM RADIO NAME
