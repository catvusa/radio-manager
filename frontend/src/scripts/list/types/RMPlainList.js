
export default class RMPlainList
{
  constructor( elementType, data )
  {
    super( elementType, data )
  } // CONSTRUCTOR

  * loop()
  {
    while( true )
    {
      // Shuffle the array with Fisher-Yates algorithm
      this._data = unsort( this._data );
                
      // Loop through the array
      for ( let element of this._data )
      {
        yield element;
      } // for
    } // while
  } // LOOP

  nextElement()
  {
    return this.loop().next().value;
  } // NEXT ELEMENT


} // RM LIST FACTORY

this._posts = posts.map(
  post => new RMPost(
    post["image"],
    post["content"],
  )
);
this._postsLoop = RMHelper.createLoop(this._posts);
  
// Set all the images (including a loop)
this._images = [];
images.forEach((image) => {
  this._images.push(new RMImage(
    image["url"]
  ));
});
this._imagesLoop = RMHelper.createLoop(this._images);

// ========================================

// Set all the introductions (including a loop)
this._introductions = [];
introductions.forEach((introduction) => {
  this._introductions.push(new RMIntroduction(
    introduction["url"]
  ));
});
this._introductionsLoop = RMHelper.createLoop(this._introductions);

// ========================================

// Set all the records (including a loop)
this._records = [];
records.forEach((record) => {
  this._records.push(new RMRecord(
    record["title"],
    record["url"]
  ));
});
this._recordsLoop = RMHelper.createLoop(this._records);
  
  class RMList
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
