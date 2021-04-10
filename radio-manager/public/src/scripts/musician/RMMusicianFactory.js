import RMMusician from "./RMMusician"

/**
 * Represent a flyweight factory
 * that produces musicians
 * and prevents from large and
 * heavy duplicates.
 */
export default class RMMusicianFactory
{
  /**
   * A collection of musicians.
   */
  static musicians = {}

  /**
   * Get the existing musician
   * or create a new one.
   * @param {object} object - The particular musician.
   * @param {number} object.id - The ID.
   */
  static getMusician( object )
  {
    if ( !this.musicians[ object.id ] )
    {
      this.musicians[ object.id ] = new RMMusician( object )
    } // if

    return this.musicians[ object.id ]
  } // GET MUSICIAN
} // RM MUSICIAN FACTORY
