/**
 * The class is used as a parent
 * for all types of lists.
 */
export default class RMLogicList
{
  constructor( elementType, data )
  {
    super( elementType, data )
  } // CONSTRUCTOR

  * loop()
  {


  } // LOOP


} // RM LIST FACTORY



    /**
     * Set the warning to HTML.
     */
    setWarning( warning )
    {
        // Check whether the warning is active
        if ( warning.isActive && ( this._numOfPlayedMusicians >= warning.first ) )
        {
            // Check whether it is time to show the warning
            if ( ( this._numOfPlayedMusicians - warning.first ) % warning.step == 0 )
            {
                if ( confirm( warning.message ) && warning.buttonLink )
                {
                    window.open( warning.buttonLink, "_blank" );
                } // if
            } // if
        } // if
    } // SET WARNING


    this._numOfPlayedMusicians = 0;
