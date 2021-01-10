import RMListFactory from "../list/RMListFactory"

/**
 * Represent a musician (e.g. a music
 * band, a composer or even the CATV
 * as an announcer or a propagator of
 * the other website projects).
 */
export default class RMMusician
{
  /**
   * Create a musician.
   * @param {string} name – The first name and surname.
   * @param {string} description – More descriptive text.
   * @param {object[]} images – All the images.
   * @param {object[]} introductions – All the introductions.
   * @param {object[]} records – All the records.
   */
  constructor( name, description, images, introductions, records )
  {
    this._name = name
    this._description = description
    this._images = RMListFactory.createList( "shuffle", "image", images )
    this._introductions = RMListFactory.createList( "shuffle", "introduction", introductions )
    this._records = RMListFactory.createList( "shuffle", "record", records )
  } // CONSTRUCTOR

  /**
   * Find out whether the musician
   * has some images or not.
   * @return {boolean} The hasImages value.
   */
  hasImages()
  {
    return this._images.data.length
  } // HAS IMAGES

  /**
   * Find out whether the musician
   * has some introductions or not.
   * @return {boolean} The hasIntroductions value.
   */
  hasIntroductions()
  {
    return this._introductions.data.length
  } // HAS INTRODUCTIONS

  /**
   * Find out whether the musician
   * has some records or not.
   * @return {boolean} The hasRecords value.
   */
  hasRecords()
  {
    return this._records.data.length
  } // HAS RECORDS

  /**
   * Get the name value.
   * @return {string} The name value.
   */
  get name()
  {
    return this._name
  } // GET NAME

  /**
   * Get the description value.
   * @return {string} The description value.
   */
  get description()
  {
    return this._description
  } // GET DESCRIPTION

  /**
   * Get the images value.
   * @return {object} The images value.
   */
  get images()
  {
    return this._images
  } // GET IMAGES

  /**
   * Get the introductions value.
   * @return {object} The introductions value.
   */
  get introductions()
  {
    return this._introductions
  } // GET INTRODUCTIONS

  /**
   * Get the records value.
   * @return {object} The records value.
   */
  get records()
  {
    return this._records
  } // GET RECORDS
} // RM MUSICIAN
