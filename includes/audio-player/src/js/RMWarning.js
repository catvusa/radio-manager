export default class RMWarning
{
    constructor( isActive, first, step, title, message, buttonText, buttonLink )
    {
        this._isActive = isActive;
        this._first = first;
        this._step = step;
        this._title = title;
        this._message = message;
        this._buttonText = buttonText;
        this._buttonLink = buttonLink;
    } // CONSTRUCTOR
    
    // ========================================
    
    get isActive()
    {
        return this._isActive;
    } // GET IS ACTIVE
    
    set isActive( isActive )
    {
        this._isActive = isActive;
    } // SET IS ACTIVE
    
    // ========================================
    
    get first()
    {
        return this._first;
    } // GET FIRST
    
    set first( first )
    {
        this._first = first;
    } // SET FIRST
    
    // ========================================
    
    get step()
    {
        return this._step;
    } // GET STEP
    
    set step( step )
    {
        this._step = step;
    } // SET STEP
    
    // ========================================
    
    get title()
    {
        return this._title;
    } // GET TITLE
    
    set title( title )
    {
        this._title = title;
    } // SET TITLE
    
    // ========================================
    
    get message()
    {
        return this._message;
    } // GET MESSAGE
    
    set message( message )
    {
        this._message = message;
    } // SET MESSAGE
    
    // ========================================
    
    get buttonText()
    {
        return this._buttonText;
    } // GET BUTTON TEXT
    
    set buttonText( buttonText )
    {
        this._buttonText = buttonText;
    } // SET BUTTON TEXT
    
    // ========================================
    
    get buttonLink()
    {
        return this._buttonLink;
    } // GET BUTTON LINK
    
    set buttonLink( buttonLink )
    {
        this._buttonLink = buttonLink;
    } // SET BUTTON LINK
} // RM WARNING
