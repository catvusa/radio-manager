import RMMultimedia from "./RMMultimedia"

/**
 * Represent a record of the musician.
 * @extends RMMultimedia
 */
export default class RMRecord extends RMMultimedia
{
  /**
   * Create a record.
   * @param {string} title – The main title.
   * @param {string} src – The URL address.
   * @param {string} type – The type of the record (audio/video).
   */
  constructor( title, src, type )
  {
    /*
      We are working with the title
      and the src only.
      The description can be added
      in the future.
    */
    super( title, "", src )

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
} // RM RECORD
