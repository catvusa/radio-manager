import RMListFactory from "../list/RMListFactory"

/**
 * Represent an item of the playlist.
 */
export default class RMPlaylistItem
{
  /**
   * Create a playlist item.
   * @param {object[]} genres – All the attached genres.
   * @param {number} numOfMusicians – Number of musicians to be played.
   * @param {number} numOfRecordsPerMusician – Number of records to be played per musician.
   * @param {boolean} showWebsitePosts – Whether the website posts are being projected while playing this playlist item.
   */
  constructor( genres, numOfMusicians, numOfRecordsPerMusician, showWebsitePosts )
  {
    this._genres = RMListFactory.createList( "shuffle", "genre", genres )
    this._numOfMusicians = numOfMusicians
    this._numOfRecordsPerMusician = numOfRecordsPerMusician
    this._showWebsitePosts = showWebsitePosts
  } // CONSTRUCTOR

  /**
   * Find out whether the playlist
   * item has some genres or is empty.
   * @return {boolean} The hasGenres value.
   */
  hasGenres()
  {
    return this._genres.data.length
  } // HAS GENRES

  /**
   * Get the genres value.
   * @return {object} The genres value.
   */
  get genres()
  {
    return this._genres
  } // GET GENRES

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
