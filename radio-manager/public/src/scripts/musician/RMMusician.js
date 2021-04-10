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
   * @param {object} object - The particular musician.
   * @param {string} object.name - The first name and surname.
   * @param {string} object.description - More descriptive text.
   * @param {object[]} object.images - All the images.
   * @param {object[]} object.introductions - All the introductions.
   * @param {object[]} object.records - All the recordings.
   */
  constructor( object )
  {
    this._name = object.name
    this._description = object.description
    this._images = RMListFactory.createList( "shuffle", "image", object.images )
    this._introductions = RMListFactory.createList( "shuffle", "introduction", object.introductions )
    this._records = RMListFactory.createList( "shuffle", "record", object.records )
  } // CONSTRUCTOR

  /**
   * Find out whether the musician
   * has some images or not.
   * @return {boolean} The hasImages value.
   */
  hasImages()
  {
    return this._images.hasData()
  } // HAS IMAGES

  /**
   * Find out whether the musician
   * has some introductions or not.
   * @return {boolean} The hasIntroductions value.
   */
  hasIntroductions()
  {
    return this._introductions.hasData()
  } // HAS INTRODUCTIONS

  /**
   * Find out whether the musician
   * has some recordings or not.
   * @return {boolean} The hasRecords value.
   */
  hasRecords()
  {
    return this._records.hasData()
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
   * Get the recordings value.
   * @return {object} The records value.
   */
  get records()
  {
    return this._records
  } // GET RECORDS
} // RM MUSICIAN
