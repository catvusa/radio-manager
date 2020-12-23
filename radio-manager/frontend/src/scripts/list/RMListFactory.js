import RMPlainList from "./types/RMPlainList"
import RMShuffleList from "./types/RMShuffleList"
import RMLogicList from "./types/RMLogicList"

/**
 * Represent a factory that produces
 * a variety of lists for the data.
 */
export default class RMListFactory
{
  /**
   * Create a particular list.
   * @param {string} listType – The type of the list.
   * @param {string} elementType – The type of the list element.
   * @param {object[]} data – The data to be saved to the list.
   */
  static createList( listType, elementType, data )
  {
    if ( listType === "plain" )
    {
      return new RMPlainList( elementType, data )
    } // if
    else if ( listType === "shuffle" )
    {
      return new RMShuffleList( elementType, data )
    } // else if
    else if ( listType === "logic" )
    {
      return new RMLogicList( elementType, data )
    } // else if
  } // CREATE LIST
} // RM LIST FACTORY
