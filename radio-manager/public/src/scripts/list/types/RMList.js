import RMListElementFactory from "../RMListElementFactory"

/**
 * Represent a parent class 
 * for all list types.
 */
export default class RMList
{
  /**
   * Create a base for all lists.
   * @param {string} elementType - Type of list elements.
   * @param {object[]} data - All the data to be saved.
   */
  constructor( elementType, data )
  {
    this._data = data.map( element => RMListElementFactory.createListElement( elementType, element ) )
    this._loop = this.loop()
  } // CONSTRUCTOR

  /**
   * Access the data one by one
   * using a custom generator.
   */
  * loop()
  {
    while ( true )
    {
      // No data
      if ( !this.hasData() )
      {
        return false
      } // if

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

  /**
   * Find out whether the list
   * has some data or not.
   * @return {boolean} The hasData value.
   */
  hasData()
  {
    return (this._data.length ? true : false)
  } // HAS DATA

  /**
   * Get the data value.
   * @return {object[]} The data value.
   */
  get data()
  {
    return this._data
  } // GET DATA
} // RM LIST
