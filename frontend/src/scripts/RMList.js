export default class RMList
{
	createList( type )
	{
		let list
		
		if ( type === "basic" )
		{
			list = new BasicList();
		} // if
		else if ( type === "shuffle" )
		{
			list = new ShuffleList();
		} // else if
		else if ( type === "logic" )
		{
			list = new LogicList();
		} // else if
		
		list.type = type;
		
		return list;
	} // CREATE LIST
	
	
    
    get title()
    {
        return this._title;
    } // GET TITLE
    
    set title( title )
    {
        this._title = title;
    } // SET TITLE
    
    // ========================================
    
    get url()
    {
        return this._url;
    } // GET URL
    
    set url( url )
    {
        this._url = url;
    } // SET URL
} // RM RECORD
