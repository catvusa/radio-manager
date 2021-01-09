/**
 * Represent a warning that can
 * appear while playing the playlist
 * of the radio station.
 */
export default class RMWarning
{
  /**
   * Create a warning.
   * @param {number} first – The warning appears for the first time after this number of musicians.
   * @param {number} step – The warning appears for the next time after this number of musicians.
   * @param {string} title – The main title.
   * @param {string} message – More descriptive text.
   * @param {string} link – The user is redirected to this URL address after clicking the confirm button.
   */
  constructor( first, step, title, message, link )
  {
    this._first = first
    this._step = step
    this._title = title
    this._message = message
    this._link = link
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
