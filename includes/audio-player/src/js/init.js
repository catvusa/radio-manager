import RMRadioStation from "./RMRadioStation.js";
import "@babel/polyfill";

// ========================================

document.addEventListener( "DOMContentLoaded", () =>
{
	let radioStations = document.querySelectorAll("div[data-rmradiostationid]");
	
	for (const radioStation of radioStations)
	{
		let data = window[ "rmData" + radioStation.dataset.rmradiostationid ];

		let instance = new RMRadioStation(
			data[ "name" ],
			data[ "logo" ],
			data[ "imgDuration" ],
			data[ "genres" ],
			data[ "playlistItems" ],
			data[ "posts" ],
			data[ "warnings" ]
		);
		
		instance.setRadioName( data[ "name" ] );
		instance.setMusicianImage( data[ "logo" ] );
		instance.addEventListeners();
		instance.createPlaylistLoop();
		instance.playlist.next();
	} // for
});
