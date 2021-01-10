import RMMultimedia from "./RMMultimedia"

/**
 * Represent an image of the musician.
 * @extends RMMultimedia
 */
export default class RMImage extends RMMultimedia
{
  /**
   * Create an image.
   * @param {string} title – The main title.
   * @param {string} description – More descriptive text.
   * @param {string} src – The URL address.
   */
  constructor( title, description, src )
  {
    /*
      We are working with each of the parameters.
      Therefore, we need them for initialization.
    */
    super( title, description, src )

    /*
      There we can add another parameters
      specific for the image in the future.
    */
  } // CONSTRUCTOR
} // RM IMAGE
