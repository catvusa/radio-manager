import React, { Component } from "react"

/**
 * Represent a caption of the image (means
 * the title or the description).
 * @extends Component
 */
export default class RMCaption extends Component
{
  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    // There must be a content
    if ( this.props.content )
    {
      return (
        <div className="rm-caption-field">
          <span dangerouslySetInnerHTML={ { __html: this.props.content } } />
        </div>
      )
    } // if

    return null
  } // RENDER
} // RM CAPTION
