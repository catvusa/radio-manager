import React, { Component } from "react"

/**
 * Represent an information in 
 * the visual player.
 * @extends Component
 */
export default class RMInfo extends Component
{
  render()
  {
    // There is an information to be shown
    if ( this.props.info )
    {
      return (
        <div className="rm-info">
          <div>
            <span dangerouslySetInnerHTML={ { __html: this.props.caption } } />
            <span className="rm-info-content" dangerouslySetInnerHTML={ { __html: this.props.info } } />
          </div>
        </div>
      )
    } // if
    
    // There is no information
    return <div className="rm-no-info"></div>
  } // RENDER
} // RM INFO
