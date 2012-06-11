var puzzles = [TwoLists, ExpressionsPuzzle, BooleanLogicPuzzle];
var lid = 0; var upd_interval = 0;

var myId = 0, oppId = 0;
var myPuzzle = 0, oppPuzzle = 0;
var myDiv = 0; oppDiv = 0;

var startNewPuzzle = function()
{
    myDiv.innerHTML = "";

    var puzzleId = Math.floor(Math.random() * puzzles.length);
    var puzzle = puzzles[puzzleId]();
    var state = puzzle.getRandomState();
    puzzle.startGame(myDiv, state, true);

    var evt = [1, puzzleId, state];
    query("http://(server url)/send.php?me=" + myId + "&evt=" + encodeURIComponent(JSON.stringify(evt)));

    myPuzzle = puzzle;
}

var isMouseButtonPressed = false;
var curTapId = 1; // imitate unique tap ids with the mouse
document.onmousedown = function(evt)
{
    isMouseButtonPressed = true;
    ++ curTapId;
    if (myPuzzle != 0)
    {
        myPuzzle.onTapDown([[curTapId, evt.pageX, evt.pageY]]);
    }
}
document.onmousemove = function(evt)
{
    if (myPuzzle != 0 && isMouseButtonPressed)
    {
        myPuzzle.onTapMove([[curTapId, evt.pageX, evt.pageY]]);
    }
}

document.onmouseup = function(evt)
{
    if (myPuzzle != 0 && isMouseButtonPressed)
    {
        isMouseButtonPressed = false;
        var res = myPuzzle.onTapUp([[curTapId, evt.pageX, evt.pageY]]);
        if (res === 0) { } // nothing happened
        else if (res === 1)
        {
            var evt = [3];
            query("http://(server url)/send.php?me=" + myId + "&evt=" + JSON.stringify(evt));
            shoot(2, myPuzzle.dmg);
            startNewPuzzle();
        }
        else
        {
            myPuzzle.applyEvent(res);
            var evt = [2, res];
            query("http://(server url)/send.php?me=" + myId + "&evt=" + JSON.stringify(evt));
        }
    }
}

function opponentEvent(evt)
{
    if (evt[0] == 1)
    {
        oppDiv.innerHTML = "";
        var puzzleId = evt[1];
        var puzzle = puzzles[puzzleId]();
        var state = evt[2];
        puzzle.startGame(oppDiv, state, false);
        oppPuzzle = puzzle;
    }
    else if (evt[0] == 2)
    {
        oppPuzzle.applyEvent(evt[1]);
    }
    else if (evt[0] == 3)
    {
        shoot(1, oppPuzzle.dmg);
    }
}

function waitForOpp()
{
    document.getElementById('myDivIdOuter').style.display = 'none';
    document.getElementById('oppDivIdOuter').style.display = 'none';
    document.getElementById('waiting').style.display = '';
    setTimeout(requestFight, 1000);
}

function startGame(_oppId)
{
    if (upd_interval) clearInterval(upd_interval);
    upd_iterval = setInterval(requestUpdate, 1000);

    oppId = _oppId;
    document.getElementById('myDivIdOuter').style.display = '';
    document.getElementById('oppDivIdOuter').style.display = '';
    document.getElementById('waiting').style.display = 'none';
    startNewPuzzle();
}

function requestUpdate()
{
    query("http://(server url)/update.php?he=" + oppId + "&lid=" + lid);
}

function requestFight()
{
    if (upd_interval) clearInterval(upd_interval);
    document.getElementById('myDivLive').innerHTML = 100;
    document.getElementById('oppDivLive').innerHTML = 100;
    document.getElementById('myDivLive').style.width = '380px';
    document.getElementById('oppDivLive').style.width = '380px';
    document.getElementById('oppDivLive').style.left = '10px';
    document.getElementById('myDivLive').style.backgroundColor = 'green';
    document.getElementById('oppDivLive').style.backgroundColor = 'green';

    query("http://(server url)/fight.php?me=" + myId);
}

function requestFight2(str)
{
    document.getElementById('ggMessage').innerHTML = "<center>" + str + "</center>";
    waitForOpp();
}


var myId = '';
for (var i = 0; i < 20; ++ i)
{
    myId += Math.floor(Math.random() * 10);
}
