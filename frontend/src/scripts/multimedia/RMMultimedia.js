/**
 * Represent a parent class for images,
 * records and introductions.
 */
export default class RMMultimedia
{
  /**
   * Create a base for all multimedia.
   * @param {string} title – The main title.
   * @param {string} description – More descriptive text.
   * @param {string} url – The URL address.
   */
  constructor( title, description, url )
  {
    this._title = title;
    this._description = description;
    this._url = url;
  } // CONSTRUCTOR

  /**
   * Get the title value.
   * @return {string} The title value.
   */
  get title()
  {
    return this._title;
  } // GET TITLE

  /**
   * Get the description value.
   * @return {string} The description value.
   */
  get description()
  {
    return this._description;
  } // GET DESCRIPTION

  /**
   * Get the url value.
   * @return {string} The url value.
   */
  get url()
  {
    return this._url;
  } // GET URL
} // RM MULTIMEDIA
