import RMListFactory from "../list/RMListFactory"

/**
 * Represent a music genre (means
 * musicians that are attached to
 * the same term of the genre taxonomy).
 */
export default class RMGenre
{
  /**
   * Create a genre.
   * @param {object} object - The particular genre.
   * @param {object[]} object.musicians - All the musicians.
   */
  constructor( object )
  {
    this._musicians = RMListFactory.createList( "shuffle", "musician", object.musicians )
  } // CONSTRUCTOR
 
  /**
   * Find out whether the genre has
   * some musicians or is empty.
   * @return {boolean} The hasMusicians value.
   */
  hasMusicians()
  {
    return this._musicians.hasData()
  } // HAS MUSICIANS

  /**
   * Get the musicians value.
   * @return {object} The musicians value.
   */
  get musicians()
  {
    return this._musicians
  } // GET MUSICIANS
} // RM GENRE
