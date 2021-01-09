import RMList from "./RMList"
import { unsort } from "array-unsort"

/**
 * Represent a list with
 * shuffled order.
 */
export default class RMShuffleList extends RMList
{
  /**
   * Create a shuffle list.
   * @param {string} elementType – Type of list elements.
   * @param {object[]} data – All the data to be saved.
   */
  constructor( elementType, data )
  {
    super( elementType, data )

    this._loop = this.loop()
  } // CONSTRUCTOR

  /**
   * Access the data one by one
   * using a generator.
   */
  * loop()
  {
    while ( true )
    {
      // No data
      if ( !this._data.length )
      {
        return false
      } // if

      // Shuffle the array with Fisher-Yates algorithm
      this._data = unsort( this._data )
      
      // Loop through the array
      for ( let element of this._data )
      {
        yield element
      } // for
    } // while
  } // LOOP

  /**
   * Get the next element of the list.
   * @return {object} The next element of the list.
   */
  nextElement()
  {
    return this._loop.next().value
  } // NEXT ELEMENT
} // RM SHUFFLE LIST
