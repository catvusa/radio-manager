/**
 * Represent the functionality of the copy 
 * button in the shortcode meta box.
 * @param {string} id – The ID of the element whose content is to be copied.
 */
function rmCopy( id )
{
  // Create the text element
  var el = document.createElement( "input" );

  // Insert the text data into the element
  el.setAttribute( "value", document.getElementById( id ).innerHTML );

  // Add the element to the DOM
  document.body.appendChild( el );

  // Select the text inside the element
  el.select();

  // Copy this text
  document.execCommand( "copy" );
  
  // Remove the element from the DOM
  document.body.removeChild( el );
} // RM COPY
