function rmCopy( element )
{
    // Create the text input and insert the element text data
    var el = document.createElement("input");
    el.setAttribute("value", document.getElementById(element).innerHTML);

    document.body.appendChild(el);

    // Highlight and copy the content
    el.select();
    document.execCommand("copy");

    document.body.removeChild(el);
} // RM COPY
