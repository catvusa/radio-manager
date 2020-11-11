import RMHelper from "./RMHelper.js";

// ========================================

export default class RMGenre
{
	constructor( musicians )
	{
		// Set all the musicians (including a loop)
		this._musicians = musicians;
		
		this._musiciansLoop = RMHelper.createLoop( this._musicians );
	} // CONSTRUCTOR
	
	// ========================================
	
	get musicians()
	{
		return this._musicians;
	} // GET MUSICIANS
	
	set musicians( musicians )
	{
		this.musicians = musicians;
	} // SET MUSICIANS
	
	// ========================================
	
	get musiciansLoop()
	{
		return this._musiciansLoop;
	} // GET MUSICIANS LOOP
	
	set musiciansLoop( musiciansLoop )
	{
		this._musiciansLoop = musiciansLoop;
	} // SET MUSICIANS LOOP
} // RM GENRE
