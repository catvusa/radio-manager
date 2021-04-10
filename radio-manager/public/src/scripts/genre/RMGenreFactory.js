import RMGenre from "./RMGenre"

/**
 * Represent a flyweight factory
 * that produces music genres
 * and prevents from large and
 * heavy duplicates.
 */
export default class RMGenreFactory
{
  /**
   * A collection of genres.
   */
  static genres = {}

  /**
   * Get the existing genre or
   * create a new one.
   * @param {object} object - The particular genre.
   * @param {string} object.slug - The slug.
   */
  static getGenre( object )
  {
    if ( !this.genres[ object.slug ] )
    {
      this.genres[ object.slug ] = new RMGenre( object )
    } // if

    return this.genres[ object.slug ]
  } // GET GENRE
} // RM GENRE FACTORY
