import RMMusician from "./RMMusician.js";
import RMHelper from "./RMHelper.js";

// ========================================

export default class RMPlaylistItem
{
	constructor(genre, numOfMusicians, numOfSongsPerMusician)
	{
		// Set musicians
		this._genreData =
		{
			"data": [],
			"index": 0
		};
		genre.forEach((musician) =>
		{
			this._genreData["data"].push(new RMMusician(
				musician["name"],
				musician["description"],
				musician["images"],
				musician["records"],
				musician["introductions"]
			));
		})
		
		this._numOfMusicians = numOfMusicians;
		this._numOfSongsPerMusician = numOfSongsPerMusician;
		
		// Shuffle the data
		RMHelper.shuffle(this._genreData);
	} // CONSTRUCTOR
	
	
	
	
	
	// ========================================
	
	get randomMusician()
	{
		return RMHelper.getElement(this._genreData);
	} // GET RANDOM MUSICIAN
	
	// ========================================

	get numOfMusicians()
	{
		return this._numOfMusicians;
	} // GET NUM OF MUSICIANS
	
	set numOfMusicians(numOfMusicians)
	{
		this._numOfMusicians = numOfMusicians;
	} // SET NUM OF MUSICIANS

	// ========================================
	
	get numOfSongsPerMusician()
	{
		return this._numOfSongsPerMusician;
	} // GET NUM OF SONGS PER MUSICIAN
	
	set numOfSongsPerMusician(numOfSongsPerMusician)
	{
		this._numOfSongsPerMusician = numOfSongsPerMusician;
	} // SET NUM OF SONGS PER MUSICIAN
} // RM PLAYLIST ITEM
