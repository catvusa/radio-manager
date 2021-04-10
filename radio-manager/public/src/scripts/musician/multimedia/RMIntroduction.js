import RMMultimedia from "./RMMultimedia"

/**
 * Represent an introduction of the musician.
 * @extends RMMultimedia
 */
export default class RMIntroduction extends RMMultimedia
{
  /**
   * Create an introduction.
   * @param {object} object - The particular introduction.
   * @param {string} object.src - The URL address.
   * @param {string} object.type - The type of the recording (audio/video).
   */
  constructor( object )
  {
    /*
      We are working with the src 
      and type only. The title and
      description can be added
      in the future.
    */
    super( "", "", object.src )
    
    this._type = object.type
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
