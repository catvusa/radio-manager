import RMImage from "./RMImage.js";
import RMRecord from "./RMRecord.js";
import RMIntroduction from "./RMIntroduction.js";
import RMHelper from "./RMHelper.js";

// ========================================

export default class RMMusician
{
	constructor(name, description, images, records, introductions)
	{
		this._name = name;
		this._description = description;


		// Set the images
		this._images =
		{
			"data": [],
			"index": 0
		};
		
		images.forEach((image) =>
		{
			this._images["data"].push(new RMImage(
				image["url"]
			));
		});
		
		
		// Set records
		this._records =
		{
			"data": [],
			"index": 0
		};
		records.forEach((record) =>
		{
			this._records["data"].push(new RMRecord(
				record["title"],
				record["url"]
			));
		});


		// Set introductions
		this._introductions =
		{
			"data": [],
			"index": 0
		};
		introductions.forEach((introduction) =>
		{
			this._introductions["data"].push(new RMIntroduction(
				introduction["url"]
			));
		});
		
		// Shuffle the data
		RMHelper.shuffle(this._images, this._records, this._introductions);
	} // CONSTRUCTOR






	
	// ========================================
	
	get randomImage()
	{
		return RMHelper.getElement(this._images);
	} // GET RANDOM IMAGE
	
	get randomRecord()
	{
		return RMHelper.getElement(this._records);
	} // GET RANDOM RECORD
	
	get randomIntroduction()
	{
		return RMHelper.getElement(this._introductions);
	} // GET RANDOM INTRODUCTION
	
	// ========================================
	
	hasImages()
	{
		return (this._images["data"].length ? true : false);
	} // HAS IMAGES
	
	hasRecords()
	{
		return (this._records["data"].length ? true : false);
	} // HAS RECORDS
	
	hasIntroductions()
	{
		return (this._introductions["data"].length ? true : false);
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
