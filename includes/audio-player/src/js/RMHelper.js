import { unsort } from "array-unsort";

// ========================================

export default class RMHelper
{
	/**
	 * Get an element from the shuffled data (e.g. images, records, introductions).
	 */
	static getElement(object)
	{
		// Get an element from the array
		let element = object["data"][object["index"]];
		
		// Increment the index
		object["index"]++;
		
		// The index points out of the array
		if (object["index"] == object["data"].length)
		{
			// Shuffle the array with Fisher-Yates algorithm
			object["data"] = unsort(object["data"]);
			
			// Restart the index
			object["index"] = 0;
		} // if
		
		// Return the element
		return element;
	} // GET ELEMENT
	
	/**
	 * Shuffle the data (e.g. images, records, introductions).
	 */
	static shuffle(...args)
	{
		// Iterate over all arguments (objects respectively)
		args.map((object) => {
			// Shuffle the array with Fisher-Yates algorithm
			object["data"] = unsort(object["data"]);
		});
	} // SHUFFLE
} // RM HELPER
