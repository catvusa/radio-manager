import RMMultimedia from "./RMMultimedia"

/**
 * Represent a recording of the musician.
 * @extends RMMultimedia
 */
export default class RMRecord extends RMMultimedia
{
  /**
   * Create a recording.
   * @param {object} object - The particular recording.
   * @param {string} object.title - The main title.
   * @param {string} object.src - The URL address.
   * @param {string} object.type - The type of the recording (audio/video).
   */
  constructor( object )
  {
    /*
      We are working with the title,
      src and type only. The description
      can be added in the future.
    */
    super( object.title, "", object.src )

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
} // RM RECORD
