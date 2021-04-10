import RMMultimedia from "./RMMultimedia"

/**
 * Represent an image of the musician.
 * @extends RMMultimedia
 */
export default class RMImage extends RMMultimedia
{
  /**
   * Create an image.
   * @param {object} object - The particular image.
   * @param {string} object.title - The top title.
   * @param {string} object.description - The bottom title.
   * @param {string} object.src - The URL address.
   */
  constructor( object )
  {
    /*
      We are working with each of the properties.
      Therefore, we need them for initialization.
    */
    super( object.title, object.description, object.src )

    /*
      There we can add another properties
      specific for the image in the future.
    */
  } // CONSTRUCTOR
} // RM IMAGE
