/**
 * Represent a warning that can
 * appear while playling the playlist
 * of the radio station.
 */
export default class RMWarning
{
  /**
   * Create a warning.
   * @param {boolean} isActive – Whether the warning is enabled or disabled.
   * @param {number} first – The warning appears after this number of musicians for the first time.
   * @param {number} step – The warning appears after this number of musicians for the next time.
   * @param {string} title – The main title.
   * @param {string} message – More descriptive text.
   * @param {string} buttonText – The text of the button.
   * @param {string} buttonLink – The user is redirected to this URL address after clicking the button.
   */
  constructor( isActive, first, step, title, message, buttonText, buttonLink )
  {
    this._isActive = isActive
    this._first = first
    this._step = step
    this._title = title
    this._message = message
    this._buttonText = buttonText
    this._buttonLink = buttonLink
  } // CONSTRUCTOR
  
  /**
   * Get the isActive value.
   * @return {boolean} The isActive value.
   */
  get isActive()
  {
    return this._isActive
  } // GET IS ACTIVE

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
   * Get the buttonText value.
   * @return {string} The buttonText value.
   */
  get buttonText()
  {
    return this._buttonText
  } // GET BUTTON TEXT

  /**
   * Get the buttonLink value.
   * @return {string} The buttonLink value.
   */
  get buttonLink()
  {
    return this._buttonLink
  } // GET BUTTON LINK
} // RM WARNING
