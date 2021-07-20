import React, { Component } from "react"

import RMRadioName from "./radio/RMRadioName"
import RMRadioMultimedia from "./radio/RMRadioMultimedia"
import RMRadioPlayer from "./radio/RMRadioPlayer"
import RMRadioWarning from "./radio/RMRadioWarning"

/**
 * Represent a radio station.
 * @extends Component
 */
export default class RMRadio extends Component
{
  constructor( props )
  {
    super( props )

    this.state =
    {
      // Radio (state)
      radioOn: false,
      radioPlay: false,
      radioSkip: false,

      // Recording (state)
      recordData:
      {
        musician: "",
        title: "",
        src: "",
        type: "",
      },

      // Image (state)
      imgData: [],
      imgVisibility: false,

      // Post (state)
      postContent: "",
      postButtons: false,
      postVisibility: false,

      // Logo (state)
      logoVisibility: true,

      // Warning (state)
      warningData:
      {
        title: "",
        message: "",
        cancel: "",
        confirm: "",
        link: "",
      },
      warningVisibility: false,
    }
    
    // Radio (methods)
    this.setRadioOn = this.setRadioOn.bind( this )
    this.setRadioPlay = this.setRadioPlay.bind( this )
    this.setRadioSkip = this.setRadioSkip.bind( this )

    // Recording (methods)
    this.setRecordData = this.setRecordData.bind( this )

    // Image (methods)
    this.setImgData = this.setImgData.bind( this )
    this.setImgVisibility = this.setImgVisibility.bind( this )

    // Post (methods)
    this.setPostContent = this.setPostContent.bind( this )
    this.setPostButtons = this.setPostButtons.bind( this )
    this.setPostVisibility = this.setPostVisibility.bind( this )

    // Logo (methods)
    this.setLogoVisibility = this.setLogoVisibility.bind( this )

    // Warning (methods)
    this.setWarningData = this.setWarningData.bind( this )
    this.setWarningVisibility = this.setWarningVisibility.bind( this )
  } // CONSTRUCTOR
  
  /**
   * Turn on/off the radio station.
   * @param {boolean} value - The radioOn value.
   */
  setRadioOn( value )
  {
    this.setState( { radioOn: value } )
  } // SET RADIO ON

  /**
   * Play/Pause the radio playlist.
   * @param {boolean} value - The radioPlay value.
   */
  setRadioPlay( value )
  {
    // Before the start up
    if ( this.state.radioOn == false )
    {
      this.setState( { radioOn: true } )
      this.setState( { radioSkip: true } )
    } // if
    
    // After the start up
    this.setState( { radioPlay: value } )
  } // SET RADIO PLAY

  /**
   * Skip to the next recording (or warning).
   * @param {boolean} value - The radioSkip value.
   */
  setRadioSkip( value )
  {
    this.setState( { radioSkip: value } )
  } // SET RADIO SKIP

  /**
   * Set the recording and all respective information.
   * @param {string} musician - The author of the song.
   * @param {string} title - The title of the song.
   * @param {string} src - The URL source of the recording.
   * @param {string} type - The type of the recording (audio/video).
   */
  setRecordData( musician, title, src, type )
  {
    this.setState(
      {
        recordData:
        {
          musician: musician,
          title: title,
          src: src,
          type: type,
        }
      }
    )
  } // SET RECORD DATA
  
  /**
   * Set the slides for the slider.
   * @param {object[]} value - The slides (means images).
   */
  setImgData( value )
  {
    this.setState( { imgData: value } )
  } // SET IMG DATA

  /**
   * Set whether the slider is visible or not.
   * @param {boolean} value - The imgVisibility value.
   */
  setImgVisibility( value )
  {
    this.setState( { imgVisibility: value } )
  } // SET IMG VISIBILITY
  
  /**
   * Set the post content (means description
   * of the musician, website posts etc.)
   * @param {string} value - The post content.
   */
  setPostContent( value )
  {
    this.setState( { postContent: value } )
  } // SET POST CONTENT

  /**
   * Set whether the back buttons of the posts
   * are visible or not.
   * @param {boolean} value - The postButtons value.
   */
  setPostButtons( value )
  {
    this.setState( { postButtons: value } )
  } // SET POST BUTTONS

  /**
   * Set whether the post is visible or not.
   * @param {boolean} value - The postVisibility value.
   */
  setPostVisibility( value )
  {
    this.setState( { postVisibility: value } )
  } // SET POST VISIBILITY

  /**
   * Set whether the logo of the radio station
   * is visible or not.
   * @param {boolean} value - The logoVisibility value.
   */
  setLogoVisibility( value )
  {
    this.setState( { logoVisibility: value } )
  } // SET LOGO VISIBILITY

  /**
   * Set the content of the warning.
   * @param {string} title - The main title.
   * @param {string} message - The main message.
   * @param {string} cancel - The label of the cancel button.
   * @param {string} confirm - The label of the confirm button.
   * @param {string} link - The link of the confirm button.
   */
  setWarningData( title, message, cancel, confirm, link )
  {
    this.setState(
      {
        warningData:
        {
          title: title,
          message: message,
          cancel: cancel,
          confirm: confirm,
          link: link,
        }
      }
    )
  } // SET WARNING DATA

  /**
   * Set whether the warning is visible or not.
   * @param {boolean} value - The warningVisibility value.
   */
  setWarningVisibility( value )
  {
    this.setState( { warningVisibility: value } )
  } // SET WARNING VISIBILITY

  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    return (
      <div id="rm-radio-field">

        <RMRadioName
          radioName={ this.props.radioName }
        />

        <RMRadioMultimedia
          playlistData={ this.props.playlistData }
          warningData={ this.props.warningData }
          postData={ this.props.postData }

          radioOn={ this.state.radioOn }

          radioPlay={ this.state.radioPlay }
          setRadioPlay={ this.setRadioPlay }

          radioSkip={ this.state.radioSkip }
          setRadioSkip={ this.setRadioSkip }
          
          recordData={ this.state.recordData }
          setRecordData={ this.setRecordData }
            
          imgData={ this.state.imgData }
          setImgData={ this.setImgData }
            
          imgDuration={ this.props.imgDuration }

          imgVisibility={ this.state.imgVisibility }
          setImgVisibility={ this.setImgVisibility }
            
          postContent={ this.state.postContent }
          setPostContent={ this.setPostContent }
            
          postButtons={ this.state.postButtons }
          setPostButtons={ this.setPostButtons }

          postVisibility={ this.state.postVisibility }
          setPostVisibility={ this.setPostVisibility }
            
          logo={ this.props.logo }

          logoVisibility={ this.state.logoVisibility }
          setLogoVisibility={ this.setLogoVisibility }

          setWarningData={ this.setWarningData }
          setWarningVisibility={ this.setWarningVisibility }
        />
        
        <RMRadioPlayer
          radioOn={ this.state.radioOn }

          radioPlay={ this.state.radioPlay }
          setRadioPlay={ this.setRadioPlay }

          musicianCaption={ this.props.musicianCaption }
          recordCaption={ this.props.recordCaption }

          recordData={ this.state.recordData }
        />

        <RMRadioWarning
          warningVisibility={ this.state.warningVisibility }
          setWarningVisibility={ this.setWarningVisibility }

          warningData={ this.state.warningData }
          setWarningData={ this.setWarningData }
          
          setRadioPlay={ this.setRadioPlay }
          setRadioSkip={ this.setRadioSkip }
        />
        
        <div id="rm-radio-skip-field" onClick={ () => { this.setRadioSkip( true ) } }></div>

      </div>
    )
  } // RENDER
} // RM RADIO
