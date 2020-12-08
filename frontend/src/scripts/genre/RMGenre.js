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
   * @param {object[]} musicians – All the musicians.
   */
  constructor( musicians )
  {
    this._musicians = RMListFactory.createList( "shuffle", "musician", musicians )
  } // CONSTRUCTOR
  
  /**
   * Get the musicians value.
   * @return {object} The musicians value.
   */
  get musicians()
  {
    return this._musicians
  } // GET MUSICIANS
} // RM GENRE
