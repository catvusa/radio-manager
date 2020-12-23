import RMMusicianFactory from "../musician/RMMusicianFactory"
import RMImage from "../musician/multimedia/RMImage"
import RMIntroduction from "../musician/multimedia/RMIntroduction"
import RMRecord from "../musician/multimedia/RMRecord"
import RMPlaylistItem from "../radio-station/RMPlaylistItem"
import RMPost from "../radio-station/RMPost"
import RMWarning from "../radio-station/RMWarning"

/**
 * Represent a factory that produces
 * a variety of list elements.
 */
export default class RMListElementFactory
{
  /**
   * Create a particular list element.
   * @param {string} elementType
   * @param {object[]} object
   */
  static createListElement( elementType, object )
  {
    if ( elementType === "musician" )
    {
      return RMMusicianFactory.getMusician( object )
    } // if
    else if ( elementType === "image" )
    {
      return new RMImage(
        object.title,
        object.description,
        object.url
      )
    } // else if
    else if ( elementType === "introduction" )
    {
      return new RMIntroduction(
        object.url
      )
    } // else if
    else if ( elementType === "record" )
    {
      return new RMRecord(
        object.title,
        object.url
      )
    } // else if
    else if ( elementType === "playlist" )
    {
      return new RMPlaylistItem(
        object.genre,
        object.numOfMusicians,
        object.numOfSongsPerMusician,
        object.showPosts
      )
    } // else if
    else if ( elementType === "post" )
    {
      return new RMPost(
        object.image,
        object.content
      )
    } // else if
    else if ( elementType === "warning" )
    {
      return new RMWarning(
        object.isActive,
        object.first,
        object.step,
        object.title,
        object.message,
        object.buttonText,
        object.buttonLink
      )
    } // else if
  } // CREATE LIST ELEMENT
} // RM LIST ELEMENT FACTORY
