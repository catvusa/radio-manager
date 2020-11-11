import RMImage from "./RMImage.js";
import RMRecord from "./RMRecord.js";
import RMIntroduction from "./RMIntroduction.js";
import { unsort } from "array-unsort";

// ========================================

export default class RMMusician
{
	constructor(name, description, images, records, introductions)
	{
		this._name = name;
		this._description = description;

		// Set the images
		this._images = [];		
		images.forEach((image) =>
		{
			this._images.push(new RMImage(
				image["url"]
			));
		});
		
		
		// Set records
		this._records = [];
		records.forEach((record) =>
		{
			this._records.push(new RMRecord(
				record["title"],
				record["url"]
			));
		});

		// Set introductions
		this._introductions = [];
		introductions.forEach((introduction) =>
		{
			this._introductions.push(new RMIntroduction(
				introduction["url"]
			));
		});
		
		
		
		
		this._imagesLoop = this.createLoop( this._images );
		this._recordsLoop = this.createLoop( this._records );
		this._introductionsLoop = this.createLoop( this._introductions );
	} // CONSTRUCTOR

	// ========================================
	
	/**
	 * Create a loop over an array using a generator.
	 */
	createLoop( array )
	{
		// Set the generator for looping through the array
		function* loop( array )
		{
			while( true )
			{
				// Shuffle the array with Fisher-Yates algorithm
				array = unsort( array );
				
				// Loop through the array
				for ( let element of array )
				{
					yield element;
				} // for
			} // while
		} // LOOP
		
		return loop( array );
	} // CREATE LOOP


	
	// ========================================
	
	get randomImage()
	{
		return this._imagesLoop.next().value;
	} // GET RANDOM IMAGE
	
	get randomRecord()
	{
		//return RMHelper.getElementFrom(this._records);
	} // GET RANDOM RECORD
	
	get randomIntroduction()
	{
		//return RMHelper.getElementFrom(this._introductions);
	} // GET RANDOM INTRODUCTION
	
	// ========================================
	
	hasImages()
	{
		return (this._images.length ? true : false);
	} // HAS IMAGES
	
	hasRecords()
	{
		return (this._records.length ? true : false);
	} // HAS RECORDS
	
	hasIntroductions()
	{
		return (this._introductions.length ? true : false);
	} // HAS INTRODUCTIONS
	
	// ========================================

	get name()
	{
		return this._name;
	} // GET NAME
	
	set name(name)
	{
		this._name = name;
	} // SET NAME
	
	// ========================================
	
	get description()
	{
		return this._description;
	} // GET DESCRIPTION
	
	set description(description)
	{
		this._description = description;
	} // SET DESCRIPTION
} // RM MUSICIAN
