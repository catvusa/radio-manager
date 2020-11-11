import RMPlaylistItem from "./RMPlaylistItem.js";
import RMGenre from "./RMGenre.js";
import RMMusician from "./RMMusician.js";
import Plyr from "plyr";
import { unsort } from "array-unsort";

// ========================================

export default class RMRadioStation
{
	constructor(name, logo, imgDuration, postType, player, genres, playlistItems, warnings)
	{
		this._name = name;
		this._logo = logo;
		this._imgDuration = imgDuration;
		this._postType = postType;
		
		// ========================================
		
		// Set the player
		this._player = new Plyr(
			document.getElementById(player),
			{
				controls: ["play", "progress"],
				autoplay: true
			}
		);
		this._player.on("ended", () => {
			this._playlist.next();
		});
		
		// ========================================
		
		// Set all the genres (including musicians)
		this._genres = {};
		genres.forEach((genre) =>
		{
			// Create musicians of the particular genre
			let musicians = [];
			genre["musicians"].forEach((musician) =>
			{
				musicians.push(new RMMusician(
					musician["name"],
					musician["description"],
					musician["images"],
					musician["introductions"],
					musician["records"]
				));
			});
			
			// Create an instance of the genre based on its musicians
			this._genres[genre["slug"]] = new RMGenre(musicians);
		});
		
		// ========================================
		
		// Set all the playlist items
		this._playlistItems = [];
		playlistItems.forEach((playlistItem) =>
		{
			this._playlistItems.push(new RMPlaylistItem(
				this._genres[playlistItem["genre"]],
				playlistItem["numOfMusicians"],
				playlistItem["numOfSongsPerMusician"]
			));
		});
		
		// ========================================
		
		// Set all the warnings
		this._warnings = warnings;
	} // CONSTRUCTOR
	
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
					// There is at least one musician in this genre
					if ( playlistItem.hasMusicians )
					{
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
							
							// Start a slideshow of the musician images
							let slideshow = _this.setSlideshow( musician );
							
							// Loop through the records of the musician
							for ( let j = 0; j < playlistItem.numOfSongsPerMusician; j++ )
							{
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
					} // if
				} // for
			} // while
		} // PLAYLIST
		
		// Assign the generator to a variable
		this._playlist = playlistLoop(this);
	} // SET PLAYLIST

	// ========================================
	
	play()
	{
		this._playlist.next();
	} // PLAY
	
	




	// ========================================

	/**
	 * Set the radio name to HTML
	 */
	setRadioName( radioName )
	{
		document.getElementById( "rm-radio-name" ).innerHTML = radioName;
	} // SET RADIO NAME

	/**
	 * Set the slideshow of the musician images
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
	 * Set the musician image to HTML
	 */
	setMusicianImage( musicianImage )
	{
		document.getElementById( "rm-musician-image" ).src = musicianImage;
	} // SET MUSICIAN IMAGE

	/**
	 * Set the musician name to HTML
	 */
	setMusicianName( musicianName )
	{
		document.getElementById( "rm-musician-name" ).innerHTML = musicianName;
	} // SET MUSICIAN NAME
	
	
	
	
	
	// not ok
	/**
	 * Set the musician record to player
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
					}
				]
			};
			
			// Set the record name to HTML
			this.setRecordName( record.title );
			
			return true;
		} // if
		
		return false;
	} // SET RECORD
	
	/**
	 * Set the musician introduction to player
	 */
	setMusicianIntroduction(musician)
	{
		// There is at least one introduction by this musician
		if (musician.hasIntroductions())
		{
			// Set the introduction to be played
			this._player.source = {
				type: "audio",
				sources: [
					{
						src: musician.randomIntroduction.url,
					}
				]
			};
			
			// Clear all the data
			this.setMusicianImage( this._logo );
			this.setMusicianName( "" );
			this.setRecordName( "" );
			this.setMusicianDescription( "" );
			
			return true;
		} // if
		
		return false;
	} // SET INTRODUCTION	
	// not ok
	
	
	
	
	
	/**
	 * Set the record name to HTML
	 */
	setRecordName( recordName )
	{
		document.getElementById( "rm-record-name" ).innerHTML = recordName;
	} // SET RECORD NAME

	/**
	 * Set the musician description to HTML
	 */
	setMusicianDescription( musicianDescription )
	{
		document.getElementById( "rm-musician-description" ).innerHTML = musicianDescription;
	} // SET MUSICIAN DESCRIPTION
} // RM RADIO STATION
