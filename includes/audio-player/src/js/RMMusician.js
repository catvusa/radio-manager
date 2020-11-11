import RMHelper from "./RMHelper.js";
import RMImage from "./RMImage.js";
import RMIntroduction from "./RMIntroduction.js";
import RMRecord from "./RMRecord.js";

// ========================================

export default class RMMusician
{
	constructor( name, description, images, introductions, records )
	{
		this._name = name;
		this._description = description;

		// ========================================

		// Set all the images (including a loop)
		this._images = [];		
		images.forEach( ( image ) =>
		{
			this._images.push( new RMImage(
				image["url"]
			) );
		} );
		this._imagesLoop = RMHelper.createLoop( this._images );

		// ========================================

		// Set all the introductions (including a loop)
		this._introductions = [];
		introductions.forEach( ( introduction ) =>
		{
			this._introductions.push( new RMIntroduction(
				introduction["url"]
			) );
		} );
		this._introductionsLoop = RMHelper.createLoop( this._introductions );
		
		// ========================================
		
		// Set all the records (including a loop)
		this._records = [];
		records.forEach( ( record ) =>
		{
			this._records.push( new RMRecord(
				record["title"],
				record["url"]
			) );
		} );
		this._recordsLoop = RMHelper.createLoop( this._records );
	} // CONSTRUCTOR

	// ========================================
	
	get randomImage()
	{
		return this._imagesLoop.next().value;
	} // GET RANDOM IMAGE
	
	get randomIntroduction()
	{
		return this._introductionsLoop.next().value;
	} // GET RANDOM INTRODUCTION
	
	get randomRecord()
	{
		return this._recordsLoop.next().value;
	} // GET RANDOM RECORD
	
	// ========================================
	
	hasImages()
	{
		return this._images.length;
	} // HAS IMAGES
	
	hasIntroductions()
	{
		return this._introductions.length;
	} // HAS INTRODUCTIONS
	
	hasRecords()
	{
		return this._records.length;
	} // HAS RECORDS
	
	// ========================================

	get name()
	{
		return this._name;
	} // GET NAME
	
	set name( name )
	{
		this._name = name;
	} // SET NAME
	
	// ========================================
	
	get description()
	{
		return this._description;
	} // GET DESCRIPTION
	
	set description( description )
	{
		this._description = description;
	} // SET DESCRIPTION
} // RM MUSICIAN
