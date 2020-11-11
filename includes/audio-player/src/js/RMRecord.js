export default class RMRecord
{
	constructor( title, url )
	{
		this._title = title;
		this._url = url;
	} // CONSTRUCTOR
	
	// ========================================
	
	get title()
	{
		return this._title;
	} // GET TITLE
	
	set title( title )
	{
		this._title = title;
	} // SET TITLE
	
	// ========================================
	
	get url()
	{
		return this._url;
	} // GET URL
	
	set url( url )
	{
		this._url = url;
	} // SET URL
} // RM RECORD
