/**
 * Represent a blog post that is
 * being projected while playing
 * the particular playlist item.
 */
export default class RMPost
{
  /**
   * Create a post.
   * @param {object} image – The featured image attached to the particular post.
   * @param {string} content – The text of the particular post.
   */
  constructor( image, content )
  {
    this._image = image
    this._content = content
  } // CONSTRUCTOR

  /**
   * Get the image value.
   * @return {object} The image value.
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
