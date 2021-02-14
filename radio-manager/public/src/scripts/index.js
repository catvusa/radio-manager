import "core-js" // polyfills

import React from "react"
import ReactDOM from "react-dom"

import RMRadio from "./components/RMRadio"

document.addEventListener( "DOMContentLoaded", () =>
{
  ( () =>
  {
    // Find all places for radio stations on the page
    let outputs = document.querySelectorAll( "div[ data-rm-output-id ]" )
        
    // Initiate all radio stations on the page
    for ( const output of outputs )
    {
      let data = window[ "rmData" + output.dataset.rmOutputId ]

      // Render a radio station if the data are available
      if ( data )
      {
        ReactDOM.render(
          <RMRadio
            radioName={ data.radioName }
            musicianCaption={ data.musicianCaption }
            recordCaption={ data.recordCaption }
            imgDuration={ data.imgDuration }
            logo={ data.logo }
            warningData={ data.warningData }
            postData={ data.postData }
            playlistData={ data.playlistData }
          />,
          output
        )
      } // if
    } // for
  } )()
} )
