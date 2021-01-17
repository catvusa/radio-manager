import React, { Component } from "react"

import RMCaption from "./RMCaption"
import RMPreloader from "./RMPreloader"

/**
 * Represent a logo of the radio station
 * that is shown by default.
 * @extends Component
 */
export default class RMLogo extends Component
{
  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    // The logo must be visible
    if ( this.props.logoVisibility )
    {
      return (
        <>
        {
          this.props.logo.map(
            logo => (
              <div className="rm-logo" key={ logo.src }>
                <RMCaption content={ logo.title } />
                <img src={ logo.src } alt="" />
                <RMCaption content={ logo.description } />
              </div>
            )
          )
        }
        <RMPreloader hasData={ this.props.logo.length } />
        </>
      )
    } // if

    return null
  } // RENDER
} // RM LOGO
