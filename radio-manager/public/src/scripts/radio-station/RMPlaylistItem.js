import RMListFactory from "../list/RMListFactory"

/**
 * Represent an item of the playlist.
 */
export default class RMPlaylistItem
{
  /**
   * Create a playlist item.
   * @param {object} object - The particular playlist item.
   * @param {object[]} object.genres - All the attached genres.
   * @param {number} object.numOfMusicians - Number of musicians to be played.
   * @param {number} object.numOfRecordsPerMusician - Number of recordings to be played per musician.
   * @param {boolean} object.showWebsitePosts - Whether the website posts are being projected while playing this playlist item.
   */
  constructor( object )
  {
    this._genres = RMListFactory.createList( "shuffle", "genre", object.genres )
    this._numOfMusicians = object.numOfMusicians
    this._numOfRecordsPerMusician = object.numOfRecordsPerMusician
    this._showWebsitePosts = object.showWebsitePosts
  } // CONSTRUCTOR

  /**
   * Find out whether the playlist
   * item has some genres or is empty.
   * @return {boolean} The hasGenres value.
   */
  hasGenres()
  {
    return this._genres.hasData()
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
