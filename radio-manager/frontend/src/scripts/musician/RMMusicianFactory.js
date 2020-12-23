import RMMusician from "./RMMusician"

/**
 * Represent a flyweight factory
 * that produces a musicians
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
   * @param {object} musician – The particular musician.
   */
  static getMusician( musician )
  {
    if ( !this.musicians[ musician.id ] )
    {
      this.musicians[ musician.id ] = new RMMusician(
        musician.name,
        musician.description,
        musician.images,
        musician.introductions,
        musician.records
      )
    } // if

    return this.musicians[ musician.id ]
  } // GET MUSICIAN
} // RM MUSICIAN FACTORY
