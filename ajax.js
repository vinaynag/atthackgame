function createRequestObject()
{
    if (window.XMLHttpRequest) {
        try {
            return new XMLHttpRequest();
        } catch (e){}
    } else if (window.ActiveXObject) {
        try {
            return new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e){}
        try {
            return new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e){}
    }
    return null;
}

function query(url,q)
{
        var xh;
    xh = createRequestObject();
    if( !xh )
        return;

        function query_completed()
        {
        if (xh.readyState == 4)
            {  
                eval(xh.responseText);
            }
        }
    xh.open('POST', url);
    xh.onreadystatechange = query_completed;
    xh.send(q);
}
