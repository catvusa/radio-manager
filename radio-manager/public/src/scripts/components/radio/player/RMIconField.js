import React, { Component } from "react"

/**
 * Represent a field of icons in the visual player.
 * @extends Component
 */
export default class RMIconField extends Component
{
  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    if ( this.props.radioPlay )
    {
      // The radio is playing
      return (
        <div className="col-lg-4">
          <div className="d-flex row justify-content-center no-gutters">
            <div className="rm-icon" onClick={ () => { this.props.setRadioPlay( false ) } }>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
              </svg>
            </div>
          </div>
        </div>
      )
    } // if
    else
    {
      // The radio is paused
      return (
        <div className="col-lg-4">
          <div className="d-flex row justify-content-center no-gutters">
            <div className="rm-icon" onClick={ () => { this.props.setRadioPlay( true ) } }>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
            </div>
          </div>
        </div>
      )
    } // else
  } // RENDER
} // RM ICON FIELD
