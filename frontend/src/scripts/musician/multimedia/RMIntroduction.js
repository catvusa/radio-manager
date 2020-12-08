import RMMultimedia from "./RMMultimedia"

/**
 * Represent an introduction of the musician.
 * @extends RMMultimedia
 */
export default class RMIntroduction extends RMMultimedia
{
  /**
   * Create an introduction.
   * @param {string} url – The URL address.
   */
  constructor( url )
  {
    /*
      We are working with the url only. The title
      and description can be added in the future.
    */
    super( "", "", url )

    /*
      There we can add another parameters
      specific for the introduction in the future.
    */
  } // CONSTRUCTOR
} // RM INTRODUCTION
