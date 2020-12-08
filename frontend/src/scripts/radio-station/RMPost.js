/**
 * Represent a post that is being
 * projected while playing
 * the particular playlist item.
 */
export default class RMPost
{
  /**
   * Create a post.
   * @param {string} image – The URL address of the featured image.
   * @param {string} content – More descriptive text.
   */
  constructor( image, content )
  {
    this._image = image
    this._content = content
  } // CONSTRUCTOR

  /**
   * Get the image value.
   * @return {string} The image value.
   */
  get image()
  {
    return this._image
  } // GET IMAGE

  /**
   * Get the content value.
   * @return {string} The content value.
   */
  get content()
  {
    return this._content
  } // GET CONTENT
} // RM POST
