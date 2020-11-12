import RMHelper from "./RMHelper.js";
import RMPlaylistItem from "./RMPlaylistItem.js";
import RMGenre from "./RMGenre.js";
import RMMusician from "./RMMusician.js";
import RMPost from "./RMPost.js";
import Plyr from "plyr";

// ========================================

export default class RMRadioStation
{
    constructor(name, logo, imgDuration, player, genres, playlistItems, posts, warnings)
    {
        this._name = name;
        this._logo = logo;
        this._imgDuration = imgDuration;
        
        // ========================================
        
        // Set the player
        this._player = new Plyr(
            document.getElementById( player )
        );
        this._player.on( "ended", () => {
            this.play();
        } );
        
        // ========================================
        
        // Set all the genres (including musicians)
        this._genres = {};
        genres.forEach( ( genre ) =>
        {
            // Add musicians of the particular genre
            let musicians = [];
            genre[ "musicians" ].forEach( ( musician ) =>
            {
                musicians.push( new RMMusician(
                    musician[ "name" ],
                    musician[ "description" ],
                    musician[ "images" ],
                    musician[ "introductions" ],
                    musician[ "records" ]
                ) );
            } );
            
            // Create an instance of the genre based on its musicians
            this._genres[ genre[ "slug" ] ] = new RMGenre( musicians );
        } );
        
        // ========================================
        
        // Set all the playlist items
        this._playlistItems = [];
        playlistItems.forEach( ( playlistItem ) =>
        {
            this._playlistItems.push( new RMPlaylistItem(
                this._genres[ playlistItem[ "genre" ] ],
                playlistItem[ "numOfMusicians" ],
                playlistItem[ "numOfSongsPerMusician" ],
                playlistItem[ "showPosts" ]
            ) );
        } );
        
        // ========================================
        
        // Set all the posts (including a loop)
        this._posts = [];       
        posts.forEach( ( post ) =>
        {
            this._posts.push( new RMPost(
                post[ "image" ],
                post[ "content" ]
            ) );
        } );
        this._postsLoop = RMHelper.createLoop( this._posts );
        
        // ========================================
        
        // Set all the warnings
        this._warnings = warnings;
    } // CONSTRUCTOR
    
    // ========================================

    get randomPost()
    {
        return this._postsLoop.next().value;
    } // GET RANDOM POST
    
    // ========================================
    
    hasPosts()
    {
        return this._posts.length;
    } // HAS POSTS

    // ========================================
    
    /**
     * Set the playlist using a generator.
     */
    createPlaylistLoop()
    {
        // Set the generator for looping through the playlist items
        function* playlistLoop( _this )
        {
            // Loop the playlist again and again
            while( true )
            {
                // Loop through the playlist items (each of them is set to a specific genre)
                for ( let playlistItem of _this._playlistItems )
                {
                    // There are no musicians in this genre
                    if ( !playlistItem.hasMusicians )
                    {
                        continue;
                    } // if
                        
                    // Loop through the musicians of the genre
                    for ( let i = 0; i < playlistItem.numOfMusicians; i++ )
                    {
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
                    } // for
                } // for
            } // while
        } // PLAYLIST LOOP
        
        // Assign the generator to the playlist
        this._playlist = playlistLoop( this );
    } // CREATE PLAYLIST LOOP

    // ========================================

    /**
     * Start playback of the radio station.
     */ 
    play()
    {
        this._playlist.next();
        this._player.play();
    } // PLAY
    
    // ========================================

    /**
     * Set the radio name to HTML.
     */
    setRadioName( radioName )
    {
        document.getElementById( "rm-radio-name" ).innerHTML = radioName;
    } // SET RADIO NAME

    /**
     * Set the slideshow of the musician images.
     */
    setSlideshow( musician )
    {
        if ( musician.hasImages() > 1 )
        {
            // Set the first musician image to slideshow
            this.setMusicianImage( musician.randomImage.url );
            
            // Start the slideshow of the musician images
            this._slideshow = setInterval(() =>
            {
                // Set the musician image
                this.setMusicianImage( musician.randomImage.url );
            }, this._imgDuration * 1000);
            
            return true;
        } // if
        else if ( musician.hasImages() == 1 )
        {
            // Set the only one musician image
            this.setMusicianImage( musician.randomImage.url );
            
            return false;
        } // else if
        else
        {
            // Set the radio station logo
            this.setMusicianImage( this._logo );
            
            return false;
        } // else
    } // SET SLIDESHOW

    /**
     * Set the musician image to HTML.
     */
    setMusicianImage( musicianImage )
    {
        document.getElementById( "rm-musician-image" ).src = musicianImage;
    } // SET MUSICIAN IMAGE

    /**
     * Set the musician name to HTML.
     */
    setMusicianName( musicianName )
    {
        document.getElementById( "rm-musician-name" ).innerHTML = musicianName;
    } // SET MUSICIAN NAME
    
    /**
     * Set the musician record to the player.
     */
    setMusicianRecord( musician )
    {
        // There is at least one record by this musician
        if ( musician.hasRecords() )
        {
            // Choose one record randomly
            let record = musician.randomRecord;
            
            // Set the record to be played
            this._player.source = {
                type: "audio",
                sources: [
                    {
                        src: record.url,
                    },
                ],
            };
            
            // Set the record name to HTML
            this.setRecordName( record.title );
            
            return true;
        } // if
        
        return false;
    } // SET MUSICIAN RECORD

    /**
     * Set the musician introduction to the player.
     */
    setMusicianIntroduction( musician )
    {
        // There is at least one introduction by this musician
        if ( musician.hasIntroductions() )
        {
            // Set the introduction to be played
            this._player.source = {
                type: "audio",
                sources: [
                    {
                        src: musician.randomIntroduction.url,
                    },
                ],
            };
            
            // Clear all the data
            this.setMusicianImage( this._logo );
            this.setMusicianName( "" );
            this.setRecordName( "" );
            this.setMusicianDescription( "" );
            
            return true;
        } // if
        
        return false;
    } // SET MUSICIAN INTRODUCTION

    /**
     * Set the record name to HTML.
     */
    setRecordName( recordName )
    {
        document.getElementById( "rm-record-name" ).innerHTML = recordName;
    } // SET RECORD NAME

    /**
     * Set the musician description to HTML.
     */
    setMusicianDescription( musicianDescription )
    {
        document.getElementById( "rm-musician-description" ).innerHTML = musicianDescription;
    } // SET MUSICIAN DESCRIPTION
} // RM RADIO STATION
