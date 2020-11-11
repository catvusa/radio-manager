import { unsort } from "array-unsort";

// ========================================

export default class RMHelper
{
	/**
	 * Create a loop over an array using a generator.
	 * Used for musicians, images, records and introductions.
	 * These data must be shuffled and repeated again and again.
	 */
	static createLoop( array )
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
} // RM HELPER
