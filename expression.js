var ExpressionsPuzzle = function()
{
    var ret = {'dmg': 5};
    var isActive = false;
    var result = 0;

    // Generates a random state for the puzzle
    //
    ret.getRandomState = function()
    {
        //return [1, 2, 3];
        var chars = "123456789";
		var string_length = 10;
		var randomstring = '';
		var operators = "+-*";
		var answer ="";
		for (var i=0; i<string_length; i= i+2) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
			rnum = Math.floor(Math.random() * operators.length);
			if( i != 8)
			randomstring += operators.substring(rnum,rnum+1);
		}

		//randomstring += "1 = ";
		//randomstring += "1";
		//return eval(randomstring);
		answer =eval(randomstring)
        return randomstring;
        //return answer;
    }

	function creatediv(elem,id, html, width, height, left, top, borderClr) {

	var newdiv = document.createElement('div'); 
	newdiv.setAttribute('id', id); 
	if (width) { newdiv.style.width = width; } 
	if (height) { newdiv.style.height = height; } 
	if ((left || top) || (left && top)) 
	{ newdiv.style.position = "absolute"; 
		if (left) 
		{ newdiv.style.left = left; } 
		if (top) { newdiv.style.top = top; } } 
		newdiv.style.border = "4px solid " + borderClr; 
        newdiv.style.borderRadius = '10px';
			if (html) { newdiv.innerHTML = "<center>" + html + "</center>"; } 
			else { newdiv.innerHTML = "nothing"; } 
			elem.appendChild(newdiv);
	}

	
    // Creates all the DOM elements required for the
    // puzzle, adds them to the elem, initializes the
    // game state with the `state` (`state` is from
    // getRandomState)
    //
    ret.startGame = function(elem, state, active)
    {
        isActive = active;
        var dv = document.createElement("div");
        //dv.innerHTML = state.join(',');
        dv.innerHTML = state;
        var dv2 = creatediv(elem,1,"<font size=+2>"+state+"</font>",250,50,75,25,'#0A0');
        var text = " Evaluate the expression";
    	var dv3 = creatediv(elem,2,text,250,50,75,125, '#0A0');

        var rnum = Math.floor(Math.random() * 100);
        var dv5 = creatediv(elem,"4","<br>"+rnum,60,60,75,300, '#00C');
	    rnum = Math.floor(Math.random() * 100);
        var dv6 = creatediv(elem,"5","<br>"+rnum,60,60,75,380, '#00C');
        rnum = eval(state);
        var dv7 = creatediv(elem,"6","<br>"+rnum,60,60,265,300, '#00C');
        rnum = Math.floor(Math.random() * 100);
        var dv8 = creatediv(elem,"7","<br>"+rnum,60,60,265,380, '#00C');
        
        //elem.appendChild(dv4);
        //var answer = eval(state);
        //if (input == answer)
        //	alert("DONE!");
       // numpad_change();
        	

    }
    // Applied the event, produced by onTapUp.
    // Returns nothing.
    //
    ret.applyEvent = function(evt)
    {
    }
    // Reactrs on tap down event. Returns nothing.
    //
    ret.onTapDown = function(fingers)
    {
    	var y = fingers [0];
    	
    if (y[1] > 277 && y[1] < 337)
    	if (y[2] >308 && y[2] <368)
    	result = 1;
    }
    // Reacts on tap move event. Returns nothing.
    //
    ret.onTapMove = function(fingers)
    {
    }
    // Reacts on tap up event. Returns:
    //   0 -- if no event is produced
    //   1 -- if the puzzle is solved
    //   list of events -- if some events were
    //     generated
    //
    ret.onTapUp = function(fingers)
    {
    	if (result == 1)
        return 1;
        else
        return fingers;
    }



return ret;
}

