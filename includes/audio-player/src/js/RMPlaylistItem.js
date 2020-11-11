import RMMusician from "./RMMusician.js";

// ========================================

export default class RMPlaylistItem
{
	constructor( genre, numOfMusicians, numOfSongsPerMusician )
	{
		this._genre = genre;
		this._numOfMusicians = numOfMusicians;
		this._numOfSongsPerMusician = numOfSongsPerMusician;
	} // CONSTRUCTOR
	
	// ========================================
	
	get randomMusician()
	{
		return this._genre.musiciansLoop.next().value;
	} // GET RANDOM MUSICIAN
	
	// ========================================
	
	hasMusicians()
	{
		return this._genre.musicians.length;
	} // HAS MUSICIANS
	
	// ========================================

	get genre()
	{
		return this._genre;
	} // GET GENRE
	
	set genre( genre )
	{
		this._genre = genre;
	} // SET GENRE
	
	// ========================================

	get numOfMusicians()
	{
		return this._numOfMusicians;
	} // GET NUM OF MUSICIANS
	
	set numOfMusicians( numOfMusicians )
	{
		this._numOfMusicians = numOfMusicians;
	} // SET NUM OF MUSICIANS

	// ========================================
	
	get numOfSongsPerMusician()
	{
		return this._numOfSongsPerMusician;
	} // GET NUM OF SONGS PER MUSICIAN
	
	set numOfSongsPerMusician( numOfSongsPerMusician )
	{
		this._numOfSongsPerMusician = numOfSongsPerMusician;
	} // SET NUM OF SONGS PER MUSICIAN
} // RM PLAYLIST ITEM
