import { unsort } from "array-unsort";

/**
 * The class is used as a parent
 * for all types of lists.
 */

    /**
     * Create a loop over an array using a generator.
     * Used for musicians, images, records and introductions.
     * These data must be shuffled and repeated again and again.
     */
export default class RMShuffleList
{
  constructor( elementType, data )
  {
    super( elementType, data )
  } // CONSTRUCTOR

  // Set the generator for looping through the array
  * loop()
  {
    while( true )
    {
      // Shuffle the array with Fisher-Yates algorithm
      this._data = unsort( this._data );
                
      // Loop through the array
      for ( let element of this._data )
      {
        yield element;
      } // for
    } // while
  } // LOOP
} // RM LIST FACTORY
