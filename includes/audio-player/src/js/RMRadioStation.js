import * as html from "./constants.js";
import RMPlaylistItem from "./RMPlaylistItem.js";
import RMMusician from "./RMMusician.js";
import Plyr from "plyr";

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
		
		this._player = new Plyr(
			document.getElementById(player),
			{
				controls: ['play', 'progress'],
				autoplay: true
			}
		);
		this._player.on("ended", () => {
			this.play();
		});
		
		// ========================================
		
		this._genres = {};
		genres.forEach((genre) =>
		{
			this._genres[genre["term"]] = [];
			genre["musicians"].forEach((musician) =>
			{
				this._genres[genre["term"]].push(new RMMusician(
					musician["name"],
					musician["description"],
					musician["images"],
					musician["records"],
					musician["introductions"]
				));
			});
		});
		
		// ========================================
		
		this._playlistItems = [];
		playlistItems.forEach((playlistItem) =>
		{
			this._playlistItems.push(new RMPlaylistItem(
				this._genres,
				playlistItem["genre"],
				playlistItem["numOfMusicians"],
				playlistItem["numOfSongsPerMusician"]
			));
		});
		
		// ========================================
		
		this._warnings = warnings;
		
		// ========================================
		
		html.RADIO_STATION_NAME.innerHTML = this._name;
		html.MUSICIAN_IMAGE.src = this._logo;
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
							if ( _this.setIntroduction( musician ) )
							{
								yield;
							} // if
							
							// Set the musician information to HTML
							_this.setInformation( musician );
							
							// Set the musician image to HTML
							_this.setImage( musician );
							
							// Loop through the records of the musician
							for ( let j = 0; j < playlistItem.numOfSongsPerMusician; j++ )
							{
								// Set the musician record to the player
								if ( _this.setRecord( musician ) )
								{
									yield;
								} // if
							} // for
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
		let musician = this._playlistItems[1].randomMusician[6];
		
		
		//this.setImage(musician);
		
		let loop = setInterval(() =>
		{
			this.setImage(musician);
		}, this._imgDuration * 1000);
		
		
		//this._playlist.next();
	} // PLAY
	
	// ========================================
	
	setInformation(musician)
	{
		// Set the musician name to HTML
		html.MUSICIAN_NAME.innerHTML = musician.name;
		
		// Set the musician description to HTML
		html.MUSICIAN_DESCRIPTION.innerHTML = musician.description;
	} // SET INFORMATION
	
	// ========================================
	
	setImage(musician)
	{
		// There is at least one image by this musician
		if (musician.hasImages())
		{
			// Set the musician image to HTML
			html.MUSICIAN_IMAGE.src = musician.randomImage.url;
		} // if
		else
		{
			// Set the radio station logo to HTML
			html.MUSICIAN_IMAGE.src = this._logo;
		} // else
	} // SET IMAGE

	// ========================================

	setRecord(musician)
	{
		// There is at least one record by this musician
		if (musician.hasRecords())
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
			html.MUSICIAN_RECORD_NAME.innerHTML = record.title;
			
			return true;
		} // if
		
		return false;
	} // SET RECORD
	
	// ========================================
	
	setIntroduction(musician)
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
					},
				],
			};
			
			return true;
		} // if
		
		return false;
	} // SET INTRODUCTION
} // RM RADIO STATION
