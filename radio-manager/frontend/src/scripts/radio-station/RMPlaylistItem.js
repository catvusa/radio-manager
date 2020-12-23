import RMGenreFactory from "../genre/RMGenreFactory"

/**
 * Represent an item of the playlist.
 */
export default class RMPlaylistItem
{
  /**
   * Create a playlist item.
   * @param {object} genre – Slug with the respective musicians.
   * @param {number} numOfMusicians – Number of musicians to be played.
   * @param {number} numOfSongsPerMusician – Number of songs to be played per musician.
   * @param {boolean} showPosts – Whether the posts are being projected while playing this playlist item.
   */
  constructor( genre, numOfMusicians, numOfSongsPerMusician, showPosts )
  {
    this._genre = RMGenreFactory.getGenre( genre )
    this._numOfMusicians = numOfMusicians
    this._numOfSongsPerMusician = numOfSongsPerMusician
    this._showPosts = showPosts
  } // CONSTRUCTOR

  /**
   * Find whether the genre has
   * some musicians or is empty.
   * @return {boolean} The hasMusicians value.
   */
  hasMusicians()
  {
    return this._genre.musicians.data.length
  } // HAS MUSICIANS

  /**
   * Get the genre value.
   * @return {object} The genre value.
   */
  get genre()
  {
    return this._genre
  } // GET GENRE

  /**
   * Get the numOfMusicians value.
   * @return {number} The numOfMusicians value.
   */
  get numOfMusicians()
  {
    return this._numOfMusicians
  } // GET NUM OF MUSICIANS

  /**
   * Get the numOfSongsPerMusician value.
   * @return {number} The numOfSongsPerMusician value.
   */
  get numOfSongsPerMusician()
  {
    return this._numOfSongsPerMusician
  } // GET NUM OF SONGS PER MUSICIAN

  /**
   * Get the showPosts value.
   * @return {boolean} The showPosts value.
   */
  get showPosts()
  {
    return this._showPosts
  } // GET SHOW POSTS
} // RM PLAYLIST ITEM
