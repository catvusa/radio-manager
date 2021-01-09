import RMListElementFactory from "../RMListElementFactory"

/**
 * Represent a parent class 
 * for all list types.
 */
export default class RMList
{
  /**
   * Create a base for all lists.
   * @param {string} elementType – Type of list elements.
   * @param {object[]} data – All the data to be saved.
   */
  constructor( elementType, data )
  {
    this._data = data.map( object => RMListElementFactory.createListElement( elementType, object ) )
  } // CONSTRUCTOR

  /**
   * Find out whether the list
   * has some data or not.
   * @return {boolean} The hasData value.
   */
  hasData()
  {
    return this._data.length
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
