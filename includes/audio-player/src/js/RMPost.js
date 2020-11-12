export default class RMPost
{
    constructor( image, content )
    {
        this._image = image;
        this._content = content;
    } // CONSTRUCTOR
    
    // ========================================
    
    get image()
    {
        return this._image;
    } // GET IMAGE
    
    set image( image )
    {
        this._image = image;
    } // SET IMAGE
    
    // ========================================
    
    get content()
    {
        return this._content;
    } // GET CONTENT
    
    set content( content )
    {
        this._content = content;
    } // SET CONTENT
} // RM POST
