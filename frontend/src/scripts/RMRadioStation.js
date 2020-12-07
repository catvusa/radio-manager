//import RMHelper from "./RMHelper";
import RMWarning from "./RMWarning";
import RMPlaylistItem from "./RMPlaylistItem";
import RMGenre from "./RMGenre";
import RMMusician from "./RMMusician";
import RMPost from "./RMPost";
import Plyr from "plyr";

const ICON_PLAY = "http://www.testcatv.site/wp-content/uploads/2020/11/play.svg";
const ICON_PAUSE = "http://www.testcatv.site/wp-content/uploads/2020/11/pause.svg";
const ICON_UP = "http://www.testcatv.site/wp-content/uploads/2020/11/up.svg";
const ICON_DOWN = "http://www.testcatv.site/wp-content/uploads/2020/11/down.svg";

// ========================================

/**
 * @class
 * Comment.
 */
export default class RMRadioStation
{
	/**
	 * @param {string} name – The name of the radio station.
	 * @param {string} logo – The URL of the logo.
	 * Etc.
	 */
    constructor(name, logo, imgDuration, genres, playlistItems, posts, warnings)
    {
        this._name = name;
        this._logo = logo;
        this._imgDuration = imgDuration;
        
        // ========================================
        
        // Set the player
        this._player = new Plyr(
            document.getElementById( "rm-radio-player" ),
			{
				controls: [
					"progress",
				],
			},
        );
        this._player.on( "ended", () => {
            this.play();
        } );
        
        // ========================================
        
        // Set all the genres (including musicians)
        this._genres = {};
		for (const [genre, musicians] of Object.entries(genres))
		{
            // Add musicians of the particular genre
            let instances = [];
            musicians.forEach( ( musician ) =>
            {
                instances.push( new RMMusician(
                    musician[ "name" ],
                    musician[ "description" ],
                    musician[ "images" ],
                    musician[ "introductions" ],
                    musician[ "records" ]
                ) );
            } );
            
            // Create an instance of the genre based on its musicians
            this._genres[ genre ] = new RMGenre( instances );
		} // for
        
        // ========================================
        
        // Set all the playlist items
        this._playlistItems = [];
        playlistItems.forEach( ( playlistItem ) =>
        {
            this._playlistItems.push( new RMPlaylistItem(
                this._genres[ playlistItem[ "genre" ][ "slug" ] ],
                playlistItem[ "numOfMusicians" ],
                playlistItem[ "numOfSongsPerMusician" ],
                playlistItem[ "showPosts" ]
            ) );
        } );
        
        // ========================================
        
		// Transform all posts to class objects
		this._posts = posts.map(
			post => new RMPost(
                post[ "image" ],
                post[ "content" ],
			)
		);
        this._postsLoop = RMHelper.createLoop( this._posts );
			
        // ========================================
        
		
		// Transform all warnings to class objects
		this._warnings = warnings.map(
			warning => new RMWarning(
                warning[ "isActive" ],
                warning[ "first" ],
                warning[ "step" ],
                warning[ "title" ],
                warning[ "message" ],
                warning[ "buttonText" ],
                warning[ "buttonLink" ],
			)
		);
        this._numOfPlayedMusicians = 0;
    } // CONSTRUCTOR
    
	
	
	
	
	
	
    /**
     * Create HTML output using React components.
     */
	/*createHTML()
	{
		ReactDOM.render(<RMRadioStationHTML />, document.getElementById("rm-output"));
	} // CREATE HTML*/
	
	
	
	
	
	
	
	
    // ========================================

    get randomPost()
    {
        return this._postsLoop.next().value;
    } // GET RANDOM POST

    // ========================================

    get playlist()
    {
        return this._playlist;
    } // GET PLAYLIST
    
    // ========================================
    
    hasPosts()
    {
        return this._posts.length;
    } // HAS POSTS

    // ========================================
    

    
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
     * Set the warning to HTML.
     */
    setWarning( warning )
    {
        // Check whether the warning is active
        if ( warning.isActive && ( this._numOfPlayedMusicians >= warning.first ) )
        {
            // Check whether it is time to show the warning
            if ( ( this._numOfPlayedMusicians - warning.first ) % warning.step == 0 )
            {
                if ( confirm( warning.message ) && warning.buttonLink )
                {
                    window.open( warning.buttonLink, "_blank" );
                } // if
            } // if
        } // if
    } // SET WARNING

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
        let descriptionField = document.getElementById( "rm-musician-description-field" );
        let descriptionGradient = document.getElementById( "rm-musician-description-gradient" );
        
        let rightIcon = document.getElementById( "rm-right-icon" );
        let rightField = document.getElementById( "rm-right-field" );
        
        // Reset the right icon
        rightIcon.src = ICON_DOWN;
        rightIcon.setAttribute( "data-src", ICON_DOWN );
        rightField.style.backgroundColor = "";
        
        // Check the length of the text
        if ( musicianDescription.length == 0 )
        {
            descriptionField.style.display = "none";
            rightField.style.visibility = "hidden";
        } // if
        else if ( musicianDescription.length > 200 )
        {
            descriptionField.style.display = "block";
            descriptionField.style.height = "";
            descriptionGradient.style.display = "block";
            rightField.style.visibility = "visible";
        } // else if
        else
        {
            descriptionField.style.display = "block";
            descriptionField.style.height = "auto";
            descriptionGradient.style.display = "none";
            rightField.style.visibility = "hidden";
        } // else
        
        // Insert the text into the musician description
        document.getElementById( "rm-musician-description" ).innerHTML = musicianDescription;
    } // SET MUSICIAN DESCRIPTION
} // RM RADIO STATION
