let player1Submit = document.getElementById('player1')
let player2Submit = document.getElementById('player2')
let result = document.getElementById('result')


player1Submit.addEventListener('click', name1)

player2Submit.addEventListener('click', name2)

let name1Arr = []
function name1() {
    let name1 = document.getElementById('input1')
    name1Arr.push(name1.value)
    let name1Str = name1Arr.toString( ) 
    result.innerHTML = name1Str + ' first!'
    name1.value = ''
    return name1Str
}

let name2Arr = []
function name2() {
    let name2 = document.getElementById('input2')
    name2Arr.push(name2.value)
    let name2Str = name2Arr.toString( )
    name2.value = ''
    return name2Str
}


let players = ['x', 'o'] 

let board = [
    null, null, null, //0, 1, 2,
    null, null, null, //3, 4, 5,
    null, null, null  //6, 7, 8
]

let boardWins = [
    [0, 1, 2], //0, 1, 2 
    [3, 4, 5], //0, 1, 2
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] //I wanna put this inside the board somehow 


let cells = document.querySelectorAll('td')
let currentPlayer = players[0] 

cells.forEach(function(cell) { //forEach calls a function for each element in an array. You must have a parameter in here
    cell.addEventListener('click', function(event) {
        //console.log(cell.cellIndex)
        if (!cells) { //This is so any space between the cells within the table is unclickable
          return;
        }
        let currentCell = event.target.id //we are targeting the cells individually
        if (!board[currentCell]) { //If board is not null. Remember the board's natural state is nullX9
            event.target.innerHTML = currentPlayer
            if (currentPlayer === players[0]) { //idk why it's making me get the definition of the variable again? But this is the only way that this statement would work. 
                let name2Str = name2()
                currentPlayer = players[1] //sets the argument, not redefining a variable
                cell.innerHTML = players[0]
                board[currentCell] = players[0]
                result.innerHTML = ''
                result.innerHTML =  name2Str + " 's turn!" //Every time I click a cell, a comma gets added to the name. I have no idea why 
            }
            else if (currentPlayer === players[1]){
                let name1Str = name1()
                currentPlayer = players[0]
                cell.innerHTML = players[1]
                board[currentCell] = players[1]
                result.innerHTML = ''
                result.innerHTML = name1Str + " 's turn!"
            } 
        }
       wins()
    }) 
})


function wins() {
    for (let i = 0; i < boardWins.length; i++) {
        let win = boardWins[i] //This is only the rows in the boardWins. We want to get the elements within boardWins[i]
        //So win's elements' indexes would all be 0, 1, or 2. Because the boardWins index is by row, and each element in the row has an index of 0, 1, or 2
        let zero = win[0] //every 0th index in each boardWins nested array
        let one = win[1] //every first index in each boardwins nested array
        let two = win[2] //every second index in each boardWins nested array
        if (players[0] === board[zero] && board[zero] === board[one] && board[one] === board[two]) { //board[win[i]] nests the indexes into the board array
            let name1Str = name1()
            result.innerHTML = name1Str + ' wins!'
            return;
        }
        if (players[1] === board[zero] && board[zero] === board[one] && board[one] === board[two]) {
            let name2Str = name2()
            result.innerHTML = name2Str + ' wins!'
            return;
        }
        if (!board.includes(null)) { //The board has to be filled completely with no matching 3's whatsoever to be a draw
            result.innerHTML = 'Draw!'
        }
    }
}

let restartButton = document.getElementById('restart')
restartButton.addEventListener('click', function() {
    location.reload();
})



                   










  
