import RMListElementFactory from "./RMListElementFactory"

/**
 * The class is used as a parent
 * for all types of lists.
 */
export default class RMList
{
  /**
   * Create a list.
   * @param {string} elementType
   * @param {object[]} data
   */
  constructor( elementType, data )
  {
    this._data = data.map( object => RMListElementFactory.createListElement( elementType, object ) )
  } // CONSTRUCTOR

  /**
   * The class is used as a parent
   * for all types of lists.
   */
  * loop()
  {
    for ( let element of this._data )
    {
      yield element
    } // for
  } // LOOP

  /**
   * The class is used as a parent
   * for all types of lists.
   */
  nextElement()
  {
    return this.loop().next().value
  } // NEXT ELEMENT

  /**
   * The class is used as a parent
   * for all types of lists.
   */
  get data()
  {
    return this._data
  } // SIZE
} // RM LIST
