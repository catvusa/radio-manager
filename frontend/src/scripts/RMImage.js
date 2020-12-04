/**
 * @class
 * Comment.
 */
export default class RMImage
{
	/**
	 * @param {string} name – The name of the radio station.
	 */
    constructor( url )
    {
        this._url = url;
    } // CONSTRUCTOR

    get url()
    {
        return this._url;
    } // GET URL
	
	/**
	 * @param {string} name – The name of the radio station.
	 */
    set url( url )
    {
        this._url = url;
    } // SET URL
} // RM IMAGE
