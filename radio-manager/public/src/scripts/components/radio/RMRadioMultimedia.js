import React, { Component } from "react"

import RMPlayer from "./multimedia/RMPlayer"
import RMSlider from "./multimedia/RMSlider"
import RMPost from "./multimedia/RMPost"
import RMLogo from "./multimedia/RMLogo"

/**
 * Represent a multimedia of the radio station.
 * @extends Component
 */
export default class RMRadioMultimedia extends Component
{
  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    return (
      <div id="rm-radio-multimedia-field">

        <RMPlayer
          playlistData={ this.props.playlistData }
          warningData={ this.props.warningData }
          postData={ this.props.postData }

          radioOn={ this.props.radioOn }

          radioPlay={ this.props.radioPlay }
          setRadioPlay={ this.props.setRadioPlay }

          radioSkip={ this.props.radioSkip }
          setRadioSkip={ this.props.setRadioSkip }
          
          recordData={ this.props.recordData }
          setRecordData={ this.props.setRecordData }

          setImgData={ this.props.setImgData }
          setImgVisibility={ this.props.setImgVisibility }

          setPostContent={ this.props.setPostContent }
          setPostButtons={ this.props.setPostButtons }
          setPostVisibility={ this.props.setPostVisibility }

          setLogoVisibility={ this.props.setLogoVisibility }

          setWarningData={ this.props.setWarningData }
          setWarningVisibility={ this.props.setWarningVisibility }
        />

        <RMSlider
          imgData={ this.props.imgData }
          imgDuration={ this.props.imgDuration }
          imgVisibility={ this.props.imgVisibility }
          
          postContent={ this.props.postContent }
          setImgVisibility={ this.props.setImgVisibility }
          setPostVisibility={ this.props.setPostVisibility }
        />

        <RMPost
          postContent={ this.props.postContent }
          postButtons={ this.props.postButtons }
          postVisibility={ this.props.postVisibility }
          setPostVisibility={ this.props.setPostVisibility }
          
          imgData={ this.props.imgData }
          setImgData={ this.props.setImgData }
          setImgVisibility={ this.props.setImgVisibility }
        />

        <RMLogo
          logo={ this.props.logo }
          logoVisibility={ this.props.logoVisibility }
        />

        <div className="rm-preloader">
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </div>

      </div>
    )
  } // RENDER
} // RM RADIO MULTIMEDIA
