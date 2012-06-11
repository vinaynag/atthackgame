var SamplePuzzle = function()
{
    var ret = {};
    var isActive = false;

    // Generates a random state for the puzzle
    //
    ret.getRandomState = function()
    {
        return [1, 2, 3, 4, 5, 6];
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
        dv.innerHTML = state.join(',');
        elem.appendChild(dv);
    }
    // Applied the event, produced by onTapUp.
    // Returns nothing.
    //
    ret.applyEvent = function(evt)
    {
        alert(evt);
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
        return fingers[0];
    }
    return ret;
}

