let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var yellow = document.createElement('button');
yellow.innerText = 'Click Here to Start'
document.getElementById('game-over-lbl').appendChild(yellow);
yellow.addEventListener('click', (initialEvent) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let value = document.querySelector('b');
let text = 'Next Player: ';
value.innerText = text;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++)
    {
        let red = 'c' + (i+1);
        var newButton = document.createElement('button');
        document.getElementById(red).appendChild(newButton);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerText = nextPlayer;
    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    }
    else{
        if (nextPlayer === 'O') {
            nextPlayer = 'X';
        }
    }

    let text = 'Next Player: ' + nextPlayer;
    value.innerText = text;
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById('game-over-lbl')
        var purple = document.createElement('h1');
        purple.innerText = 'Game Over';
        label.appendChild(purple);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let white = true;
   for (let i = 0; i < blue.length; i++)
   {
       if (!blue[i].disabled)
       {
           white = false;
       }
   }
   return white;
   
}
