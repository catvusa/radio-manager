import React, { Component } from "react"
import { unsort } from "array-unsort"
import { Button } from "react-bootstrap"

/**
 * Represent a post to be shown in the radio
 * station (means the musician's description
 * or another website posts).
 * @extends Component
 */
export default class RMPost extends Component
{
  /**
   * Show the slider.
   */
  showSlider()
  {
    this.props.setImgData( unsort( this.props.imgData ) /* Shuffled images */ )
    this.props.setImgVisibility( true )
    this.props.setPostVisibility( false )
  } // SHOW SLIDER

  /**
   * Decide whether the back button is visible in the post or not.
   */
  getBackButton()
  {
    // The button must be visible (if the musician has images)
    if ( this.props.postButtons )
    {
      return <Button variant="primary" onClick={ () => { this.showSlider() } }>Back</Button>
    } // if
  } // GET BACK BUTTON

  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    // The post must be visible
    if ( this.props.postVisibility )
    {
      return (
        <div id="rm-post-field">
          { this.getBackButton() }
          <div id="rm-post" dangerouslySetInnerHTML={ { __html: this.props.postContent } } />
          { this.getBackButton() }
        </div>
      )
    } // if

    return null
  } // RENDER
} // RM POST
