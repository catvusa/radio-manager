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
   * @param {number} numOfRecordsPerMusician – Number of records to be played per musician.
   * @param {boolean} showWebsitePosts – Whether the website posts are being projected while playing this playlist item.
   */
  constructor( genre, numOfMusicians, numOfRecordsPerMusician, showWebsitePosts )
  {
    this._genre = RMGenreFactory.getGenre( genre )
    this._numOfMusicians = numOfMusicians
    this._numOfRecordsPerMusician = numOfRecordsPerMusician
    this._showWebsitePosts = showWebsitePosts
  } // CONSTRUCTOR

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
   * Get the numOfRecordsPerMusician value.
   * @return {number} The numOfRecordsPerMusician value.
   */
  get numOfRecordsPerMusician()
  {
    return this._numOfRecordsPerMusician
  } // GET NUM OF RECORDS PER MUSICIAN

  /**
   * Get the showWebsitePosts value.
   * @return {boolean} The showWebsitePosts value.
   */
  get showWebsitePosts()
  {
    return this._showWebsitePosts
  } // GET SHOW WEBSITE POSTS
} // RM PLAYLIST ITEM
