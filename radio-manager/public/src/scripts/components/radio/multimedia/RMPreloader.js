import React, { Component } from "react"

/**
 * Represent a preloader for the logo,
 * images and videos.
 * @extends Component
 */
export default class RMPreloader extends Component
{
  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    // There must be the logo, image or video
    if ( this.props.hasData )
    {
      return (
        <div className="rm-preloader">
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>
      )
    } // if

    return null
  } // RENDER
} // RM PRELOADER
