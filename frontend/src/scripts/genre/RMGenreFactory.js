import RMGenre from "./RMGenre"

/**
 * Represent a flyweight factory
 * that produces a music genres
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
   * @param {object} genre – The particular genre.
   */
  static getGenre( genre )
  {
    if ( !this.genres[ genre.slug ] )
    {
      this.genres[ genre.slug ] = new RMGenre(
        genre.musicians
      )
    } // if

    return this.genres[ genre.slug ]
  } // GET GENRE
} // RM GENRE FACTORY
