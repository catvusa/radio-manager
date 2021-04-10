import RMList from "./RMList"

/**
 * Represent a list with
 * no order.
 */
export default class RMPlainList extends RMList
{
  /**
   * Create a plain list.
   * @param {string} elementType - Type of list elements.
   * @param {object[]} data - All the data to be saved.
   */
  constructor( elementType, data )
  {
    super( elementType, data )
  } // CONSTRUCTOR
} // RM PLAIN LIST
