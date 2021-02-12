import React, { Component } from "react"
import { Modal, Button } from "react-bootstrap"

/**
 * Represent a warning of the radio
 * station.
 * @extends Component
 */
export default class RMRadioWarning extends Component
{
  /**
   * Happens after the user finishes the warning.
   */
  finishWarning()
  {
    this.props.setWarningVisibility( false )
    this.props.setWarningData( "", "", "" )
    this.props.setRadioSkip( true )
  } // FINISH WARNING

  /**
   * Get the confirm button with(out) the link.
   */
  getConfirmButton()
  {
    // There is a URL address to redirect
    if ( this.props.warningData.link )
    {
      return (
        <a href={ this.props.warningData.link } target="_blank">
          <Button variant="primary">OK</Button>
        </a>
      )
    } // if
    
    return <Button variant="primary" onClick={ () => { this.finishWarning() } }>OK</Button>
  } // GET CONFIRM BUTTON

  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    // The warning must be visible
    if ( this.props.warningVisibility )
    {
      return (
        <Modal
          show={ this.props.warningVisibility }
          onHide={ () => { this.finishWarning() } }
          backdrop="static"
          keyboard={ false }
        >
          <Modal.Header closeButton>
            <Modal.Title dangerouslySetInnerHTML={ { __html: this.props.warningData.title } } />
          </Modal.Header>
          <Modal.Body dangerouslySetInnerHTML={ { __html: this.props.warningData.message } } />
          <Modal.Footer>
            <Button variant="secondary" onClick={ () => { this.finishWarning() } }>Close</Button>
            { this.getConfirmButton() }
          </Modal.Footer>
        </Modal>
      )
    } // if

    return null
  } // RENDER
} // RM RADIO WARNING
