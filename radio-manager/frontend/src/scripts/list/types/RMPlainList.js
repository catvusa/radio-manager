/**
 * The class is used as a parent
 * for all types of lists.
 */
export default class RMPlainList
{
  constructor( elementType, data )
  {
    super( elementType, data )
  } // CONSTRUCTOR

  // generator function
  * loop()
  {
    while( true )
    {
      // iterable
      for ( let element of this._data )
      {
        yield element
      } // for
    } // while
  } // LOOP
} // RM PLAIN FACTORY
