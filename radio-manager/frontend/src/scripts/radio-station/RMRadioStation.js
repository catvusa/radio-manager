import RMListFactory from "../list/RMListFactory"

/**
 * The class is used as a parent
 * for all types of lists.
 */
export default class RMRadioStation
{
  /**
   * Create a radio station.
   * @param {any} name
   * @param {any} logo
   * @param {any} imgDuration
   * @param {any} playlist
   * @param {any} posts
   * @param {any} warnings
   */
  constructor(name, logo, imgDuration, playlist, posts, warnings)
  {
    this._name = name
    this._logo = logo
    this._imgDuration = imgDuration
    this._playlist = RMListFactory.createList( "plain", "playlist", playlist )
    this._posts = RMListFactory.createList( "shuffle", "post", posts )
    this._warnings = RMListFactory.createList( "logic", "warning", warnings )   
  } // CONSTRUCTOR

  /**
   * Create a radio station.
   */
  * loop()
  {
    for (let playlistItem of this._playlist)
    {
      if (!playlistItem.hasMusicians())
      {
        continue
      } // if

      // check all warnings
      // show all needed warnings

      for (let i = 0; i < playlistItem.numOfMusicians; i++)
      {
        // choose a random musician
        // play a random introduction
        // yield
        // start a slideshow o random images of the musician

        for (let j = 0; j < playlistItem.numOfSongsPerMusician; j++)
        {

          // posts
          // play a random record of the musician

        } // for
      } // for
    } // for
  } // LOOP

} // RM RADIO STATION

  // Set the generator for looping through the playlist items
  play()
  {
    
// Loop through the musicians of the genre
for ( let i = 0; i < playlistItem.numOfMusicians; i++ )
{
    // Show all the warnings if set
    for ( let warning of _this._warnings )
    {
        _this.setWarning( warning );
    } // for
                        
    // Set a musician
    let musician = playlistItem.randomMusician;
                        
    // Set the musician introduction to the player
    if ( _this.setMusicianIntroduction( musician ) )
    {
        yield;
    } // if
                        
    // Set the musician information to HTML
    _this.setMusicianName( musician.name );
    _this.setMusicianDescription( musician.description );
                        
    // Start a slideshow of the musician images (if no posts are being shown)
    let slideshow = false;
    if ( !playlistItem.showPosts || !_this.hasPosts() )
    {
        slideshow = _this.setSlideshow( musician );
    } // if
                        
    // Loop through the records of the musician
    for ( let j = 0; j < playlistItem.numOfSongsPerMusician; j++ )
    {
        // The posts are enabled
        if ( playlistItem.showPosts && _this.hasPosts() )
        {
            // Set a post
            let post = _this.randomPost;
                                
            // Set information about the post to HTML
            _this.setMusicianImage( post.image ? post.image : _this._logo );
            _this.setMusicianDescription( post.content );
        } // if
                            
        // Set the musician record to the player
        if ( _this.setMusicianRecord( musician ) )
        {
            yield;
        } // if
    } // for
                        
    // Stop the slideshow of the musician images
    if ( slideshow )
    {
        clearInterval( _this._slideshow );
    } // if
                        
    _this._numOfPlayedMusicians++;
} // for

  /**
  * Start playback of the radio station.
  */ 
play()
{
    this._playlist.next();
    this._player.play();
} // PLAY
