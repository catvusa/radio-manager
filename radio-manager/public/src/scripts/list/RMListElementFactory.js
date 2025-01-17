import RMMusicianFactory from "../musician/RMMusicianFactory"

import RMImage from "../musician/multimedia/RMImage"
import RMIntroduction from "../musician/multimedia/RMIntroduction"
import RMRecord from "../musician/multimedia/RMRecord"

import RMGenreFactory from "../genre/RMGenreFactory"

import RMPlaylistItem from "../radio-station/RMPlaylistItem"
import RMPost from "../radio-station/RMPost"
import RMWarning from "../radio-station/RMWarning"

/**
 * Represent a factory that produces
 * various list elements.
 */
export default class RMListElementFactory
{
  /**
   * Create a particular list element.
   * @param {string} elementType - The type of the list element.
   * @param {object} object - All the data to be saved.
   */
  static createListElement( elementType, object )
  {
    if ( elementType == "musician" )
    {
      return RMMusicianFactory.getMusician( object )
    } // if
    else if ( elementType == "image" )
    {
      return new RMImage( object )
    } // else if
    else if ( elementType == "introduction" )
    {
      return new RMIntroduction( object )
    } // else if
    else if ( elementType == "record" )
    {
      return new RMRecord( object )
    } // else if
    else if ( elementType == "genre" )
    {
      return RMGenreFactory.getGenre( object )
    } // else if
    else if ( elementType == "playlistItem" )
    {
      return new RMPlaylistItem( object )
    } // else if
    else if ( elementType == "post" )
    {
      return new RMPost( object )
    } // else if
    else if ( elementType == "warning" )
    {
      return new RMWarning( object )
    } // else if
    
    return null
  } // CREATE LIST ELEMENT
} // RM LIST ELEMENT FACTORY
