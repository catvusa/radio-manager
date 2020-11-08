import * as html from "./constants.js";
import RMPlaylistItem from "./RMPlaylistItem.js";
import Plyr from "plyr";

// ========================================

export default class RMRadioStation
{
	constructor(name, logo, imgDuration, postType, player, playlist, warnings)
	{
		this._name = name;
		this._logo = logo;
		this._imgDuration = imgDuration;
		this._postType = postType;
		
		// ========================================
		
		const el = document.createElement("audio");
		el.setAttribute("muted", "muted");
		document.getElementById(player).appendChild(el);
		
		this._player = new Plyr(el, {
			controls: ['play', 'progress'],
			autoplay: true
		});
		this._player.on("ended", () => {
			this.play();
		});
		
		// ========================================
		
		this._playlist = [];
		playlist.forEach((playlistItem) =>
		{
			this._playlist.push(new RMPlaylistItem(
				playlistItem["genre"],
				playlistItem["numOfMusicians"],
				playlistItem["numOfSongsPerMusician"]
			));
		})
		this._currentPlaylistItem = 0;
		
		// ========================================
		
		this._warnings = warnings;
	} // CONSTRUCTOR
	
	// ========================================
	
	setValuesToHTML()
	{
		html.RADIO_STATION_NAME.innerHTML = this._name;
		html.MUSICIAN_IMAGE.src = this._logo;
	} // SET VALUES
	
	// ========================================
	
	play()
	{	
		// Get the musician
		let musician = this._playlist[this._currentPlaylistItem].randomMusician;
		
		// Set the musician
		this.set(musician);
		
		// Set index of the current image to the next image
		this._currentPlaylistItem++;
		
		// Index of the current image points out of the array
		if (this._currentPlaylistItem == this._playlist.length)
		{
			// Set index of the current image to the first image
			this._currentPlaylistItem = 0;
		} // if
	} // PLAY
	
	// ========================================
	
	set(musician)
	{
		let image = musician.randomImage;
		let record = musician.randomRecord;
		let introduction = musician.randomIntroduction;
		
		// ========================================
		
		if (musician.hasImages())
		{
			// Set image of the musician
			html.MUSICIAN_IMAGE.src = image.url;
		} // if
		else
		{
			// Set logo of the radio station
			html.MUSICIAN_IMAGE.src = this._logo;
		}; // else
		
		// ========================================
	
		if (musician.hasIntroductions())
		{
			// Set introduction of the musician to be played
			this._player.source = {
				type: 'audio',
				sources: [
					{
						src: introduction.url,
					},
				],
			};
		} // if
		else
		{
			// Set record of the musician to be played
			this._player.source = {
				type: 'audio',
				sources: [
					{
						src: record.url,
					},
				],
			};
		}; // else

		// ========================================

		// Set name of the musician
		html.MUSICIAN_NAME.innerHTML = musician.name;
		
		// Set name of the record
		html.MUSICIAN_RECORD_NAME.innerHTML = record.title;
		
		// Set description of the musician
		html.MUSICIAN_DESCRIPTION.innerHTML = musician.description;
	} // PLAY
} // RM RADIO STATION
