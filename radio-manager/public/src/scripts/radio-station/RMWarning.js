/**
 * Represent a warning that can
 * appear while playing the playlist
 * of the radio station.
 */
export default class RMWarning
{
  /**
   * Create a warning.
   * @param {object} object - The particular warning.
   * @param {number} object.first - The warning appears for the first time after this number of musicians.
   * @param {number} object.step - The warning appears for the next time after this number of musicians.
   * @param {string} object.title - The main title.
   * @param {string} object.message - More descriptive text.
   * @param {string} object.link - The user is redirected to this URL address after clicking the confirm button.
   */
  constructor( object )
  {
    this._first = object.first
    this._step = object.step
    this._title = object.title
    this._message = object.message
    this._link = object.link
  } // CONSTRUCTOR

  /**
   * Get the first value.
   * @return {number} The first value.
   */
  get first()
  {
    return this._first
  } // GET FIRST
  
  /**
   * Get the step value.
   * @return {number} The step value.
   */
  get step()
  {
    return this._step
  } // GET STEP

  /**
   * Get the title value.
   * @return {string} The title value.
   */
  get title()
  {
    return this._title
  } // GET TITLE

  /**
   * Get the message value.
   * @return {string} The message value.
   */
  get message()
  {
    return this._message
  } // GET MESSAGE

  /**
   * Get the link value.
   * @return {string} The link value.
   */
  get link()
  {
    return this._link
  } // GET LINK
} // RM WARNING
