var BooleanLogicPuzzle = function()
{
    var ret = {'dmg': 10};
    var isActive = false;
    var resultval ="";
    var answerval = ["0010"];
    var rightanswer = false;
    // Generates a random state for the puzzle
    //
    ret.getRandomState = function()
    {
        //return [1, 2, 3, 4, 5, 6];
        return[];
        
    }

    // Creates all the DOM elements required for the
    // puzzle, adds them to the elem, initializes the
    // game state with the `state` (`state` is from
    // getRandomState)
    //
    ret.startGame = function(elem, state, active)
    {
        isActive = active;
        
        //var dv = document.createElement("div");
        //var dv = creatediv('raw_bool',state,50,50, 20, 20);
        //dv.innerHTML = state.join(',');
        
        var dv = creatediv (elem, 'panel' + active,state, 350,70, 25, 300, true);
        document.getElementById('panel' + active).innerHTML = 'Verify the Logic.\n Tap on the inputs to change the state to get the correct output.';       
        document.getElementById('panel' + active).style.textAlign = "center";
        var input1 = creatediv (elem, 'input1',state, 350,100, 40, 30, false);
        document.getElementById('input1').style.color = "#000";
        document.getElementById('input1').innerHTML = '1'; 
        var input2 = creatediv (elem, 'input2',state, 350,100, 40, 55, false);
        document.getElementById('input2').style.color = "#000";
        document.getElementById('input2').innerHTML = '1';        
        var input3 = creatediv (elem, 'input3',state, 350,100, 40, 110, false);
        document.getElementById('input3').style.color = "#000";
        document.getElementById('input3').innerHTML = '1';        
        var input4 = creatediv (elem, 'input4',state, 350,100, 40, 135, false);
        document.getElementById('input4').style.color = "#000";
        document.getElementById('input4').innerHTML = '1'; 
        var input5 = creatediv (elem, 'input5',state, 350,100, 360, 80, false);
        document.getElementById('input5').style.color = "#000";
        document.getElementById('input5').innerHTML = '1';         
        
        var img=document.createElement('img');
        img.src='raw_bool-2.png';
        img.style.paddingLeft = "30px";
        img.style.paddingTop = "25px";
        
        //document.body.appendChild(img);
        elem.appendChild(img);
        var and=document.createElement('img');
        and.src='OR.png';
        and.style.left = "145px";
        and.style.top = "35px";
        and.style.position = "absolute";
        and.style.width = "30px";
        and.style.height = "30px";        
        elem.appendChild(and);
        //elem.appendChild(and);
        var or=document.createElement('img');
        or.src='and.png';
        or.style.left = "145px";
        or.style.top = "115px";
        or.style.position = "absolute";
        or.style.width = "30px";
        or.style.height = "30px";        
        elem.appendChild(or);        
        //elem.appendChild(or);
        var and2=document.createElement('img');
        and2.src='and.png';
        and2.style.left = "275px";
        and2.style.top = "75px";
        and2.style.position = "absolute";
        and2.style.width = "30px";
        and2.style.height = "30px";        
        elem.appendChild(and2);           
        
        //state.join(img)
        //dv.innerHTML = state.join(',');
        
        
        
    }
    // Applied the event, produced by onTapUp.
    // Returns nothing.
    //
    ret.applyEvent = function(evt)
    {
        document.getElementById('input1').innerHTML = evt[0];
        document.getElementById('input2').innerHTML = evt[1];
        document.getElementById('input3').innerHTML = evt[2];
        document.getElementById('input4').innerHTML = evt[3];
    }
    // Reactrs on tap down event. Returns nothing.
    //
    ret.onTapDown = function(fingers)
    {
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
    	    //var x = fingers[0];
    	    var x = fingers[0];

    	    //var y = fingers[2];
    	    //alert(x[1]);
    	    //alert(x[2]);
    	    if ((x[1] >= 40 && x[1] <= 62 ) && (x[2] >= 34 && x[2] <= 53 )){
    	    	    if (document.getElementById('input1').innerHTML === '0'){
    	    	    	    document.getElementById('input1').innerHTML = '1';
    	    	    }
    	    	    else if (document.getElementById('input1').innerHTML === '1'){
    	    	    	    document.getElementById('input1').innerHTML = '0';
    	    	    }
    	    }
    	    if ((x[1] >= 40 && x[1] <= 62 ) && (x[2] >= 61 && x[2] <= 78 )){
    	    	    if (document.getElementById('input2').innerHTML === '0'){
    	    	    	    document.getElementById('input2').innerHTML = '1';
    	    	    }
    	    	    else if (document.getElementById('input2').innerHTML === '1'){
    	    	    	    document.getElementById('input2').innerHTML = '0';
    	    	    }
    	    } 
    	    if ((x[1] >= 40 && x[1] <= 62 ) && (x[2] >= 114 && x[2] <= 131 )){
    	    	    if (document.getElementById('input3').innerHTML === '0'){
    	    	    	    document.getElementById('input3').innerHTML = '1';
    	    	    }
    	    	    else if (document.getElementById('input3').innerHTML === '1'){
    	    	    	    document.getElementById('input3').innerHTML = '0';
    	    	    }
    	    }
    	    if ((x[1] >= 40 && x[1] <= 62 ) && (x[2] >= 141 && x[2] <= 160 )){
      	    	    if (document.getElementById('input4').innerHTML === '0'){
    	    	    	    document.getElementById('input4').innerHTML = '1';
    	    	    }
    	    	    else if (document.getElementById('input4').innerHTML === '1'){
    	    	    	    document.getElementById('input4').innerHTML = '0';
    	    	    }
    	    }    	    
    	    var val1 = document.getElementById('input1').innerHTML ;
    	    var val2 = document.getElementById('input2').innerHTML ;
    	    var val3 = document.getElementById('input3').innerHTML ;
    	    var val4 = document.getElementById('input4').innerHTML ;
    	    resultval = val1 + val2 + val3 + val4;
    	    
    	    //alert (resultval);
    	    //alert(fingers[1]);
    	    if (contains(answerval,resultval)){
    	    	    return 1;
    	    }
    	    else {
    	    	    return [val1, val2, val3, val4];
    	    }
    }
    return ret;
    
    function creatediv(elem, id, html, width, height, left, top, border) {
	
	var newdiv = document.createElement('div'); 
	newdiv.setAttribute('id', id); 
	if (width) { newdiv.style.width = width; } 
	if (height) { newdiv.style.height = height; } 
	if ((left || top) || (left && top)) { newdiv.style.position = "absolute"; 
        if (left) { newdiv.style.left = left; } 
        if (top) { newdiv.style.top = top; } } 
        newdiv.style.borderRadius = "10px"; 
        if(border){
        newdiv.style.border = "4px solid #00FF00"; }
        if (html) { newdiv.innerHTML = html; } 
        else { newdiv.innerHTML = "nothing"; } 
        elem.appendChild(newdiv);
    }    
    function contains(resultArr, obj) {
    for (var i = 0; i < resultArr.length; i++) {
        if (resultArr[i] === obj) {
            return true;
        }
    }
    return false;
}
}

