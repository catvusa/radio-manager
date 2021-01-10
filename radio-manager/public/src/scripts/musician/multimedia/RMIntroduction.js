import RMMultimedia from "./RMMultimedia"

/**
 * Represent an introduction of the musician.
 * @extends RMMultimedia
 */
export default class RMIntroduction extends RMMultimedia
{
  /**
   * Create an introduction.
   * @param {string} src – The URL address.
   * @param {string} type – The type of the record (audio/video).
   */
  constructor( src, type )
  {
    /*
      We are working with the src only.
      The title and the description can
      be added in the future.
    */
    super( "", "", src )
    
    this._type = type
  } // CONSTRUCTOR

  /**
   * Get the type value.
   * @return {string} The type value.
   */
  get type()
  {
    return this._type
  } // GET TYPE
} // RM INTRODUCTION
