import React, { Component } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, EffectFade } from "swiper"

import RMCaption from "./RMCaption"

SwiperCore.use( [ Autoplay, EffectFade ] )

/**
 * Represent a slider consisting of slides
 * (means photos of musicians etc.)
 * @extends Component
 */
export default class RMSlider extends Component
{
  /**
   * Show the post (if available).
   */
  showPost()
  {
    // There must be a post
    if ( this.props.postContent )
    {
      this.props.setImgVisibility( false )
      this.props.setPostVisibility( true )
    } // if
  } // SHOW POST

  /**
   * Output the HTML to the DOM.
   */
  render()
  {
    // The slider must be visible
    if ( this.props.imgVisibility )
    {
      return (
        <Swiper
          id="rm-slider"
          effect="fade"
          loop={ true }
          allowTouchMove={ false }
          speed={ 500 }
          autoplay={ { delay: this.props.imgDuration } }
        >
        {
          this.props.imgData.map(
            img => (
              <SwiperSlide key={ img.src }>
                <div className="rm-slide">
                  <RMCaption content={ img.title } />
                  <img src={ img.src } onClick={ () => { this.showPost() } } />
                  <RMCaption content={ img.description } />
                </div>
              </SwiperSlide>
            )
          )
        }
        </Swiper> 
      )
    } // if

    return null
  } // RENDER
} // RM SLIDER