import RMPlainList from "./types/RMPlainList"
import RMShuffleList from "./types/RMShuffleList"
import RMPlayList from "./types/RMPlayList"
import RMLogicList from "./types/RMLogicList"

/**
 * Represent a factory that produces
 * a variety of lists for the data.
 */
export default class RMListFactory
{
  /**
   * Create a particular list.
   * @param {string} listType
   * @param {string} elementType
   * @param {object[]} data
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
    else if ( listType === "play" )
    {
      return new RMPlayList( elementType, data )
    } // else if
    else if ( listType === "logic" )
    {
      return new RMLogicList( elementType, data )
    } // else if
  } // CREATE LIST
} // RM LIST FACTORY
