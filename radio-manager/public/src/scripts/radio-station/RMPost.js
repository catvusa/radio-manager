import RMListFactory from "../list/RMListFactory"

/**
 * Represent a website post that is
 * being projected while playing
 * the particular playlist item.
 */
export default class RMPost
{
  /**
   * Create a post.
   * @param {object} object - The particular post.
   * @param {object} object.image - The featured image attached to the particular post.
   * @param {string} object.content - The text of the particular post.
   */
  constructor( object )
  {
    this._image = RMListFactory.createList( "plain", "image", object.image )
    this._content = object.content
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
