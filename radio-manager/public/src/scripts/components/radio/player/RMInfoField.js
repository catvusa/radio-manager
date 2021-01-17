import React, { Component } from "react"

import RMInfo from "./RMInfo"

/**
 * Represent a field of information in the visual player.
 * @extends Component
 */
export default class RMInfoField extends Component
{
  render()
  {
    // There is at least one information to be shown
    if ( this.props.recordData.musician || this.props.recordData.title )
    {
      return (
        <div className="rm-info-field col-lg-8">
          <div className="d-flex row no-gutters">

            <RMInfo
              caption={ this.props.musicianCaption }
              info={ this.props.recordData.musician }
            />

            <RMInfo
              caption={ this.props.recordCaption }
              info={ this.props.recordData.title }
            />

          </div>
        </div>
      )
    } // if

    // There is no information
    return <div className="col-lg-8"></div>
  } // RENDER
} // RM INFO FIELD
