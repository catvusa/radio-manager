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
   * @param {string} url – The URL address.
   */
  constructor( title, url )
  {
    /*
      We are working with the title and url only.
      The description can be added in the future.
    */
    super( title, "", url )

    /*
      There we can add another parameters
      specific for the record in the future.
    */
  } // CONSTRUCTOR
} // RM RECORD
