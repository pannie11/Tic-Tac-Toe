let player1Submit = document.getElementById('player1')
let player2Submit = document.getElementById('player2')
let result = document.getElementById('result')
//pick single or multi player


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
    null, null, null,  //consider each row like tr
    null, null, null, //[0, 1, 2]
    null, null, null //length of this array is 3. 3 rows
]
// board index: 
//[0, 1, 2,
// 3, 4, 5,
// 6, 7, 8]
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
// cells.forEach(cell => {
//     cell.addEventListener('click', () => 
//     console.log('yo'))
// })






//multiplayer
cells.forEach(function(cell) { //forEach calls a function for each element in an array. You must have a parameter in here
    cell.addEventListener('click', function(event) {
       
        console.log('clicked')
        //console.log(cell.cellIndex)
        if (!cells) {
          return;
        }
        let currentCell = event.target.id //we are targeting the cells individually 
        if (!board[currentCell]) { //if board is not null. remember the board's natural state is nullX9
            event.target.innerHTML = currentPlayer
        
        // if (currentPlayer === players[0]) {
        //     currentPlayer = players[1]
        //     result.innerHTML = "Player O's turn"
        // }
        // if (currentPlayer === players[1]) {
        //      currentPlayer = players[0]
        //      result.innerHTML = "Player X's turn"
       
       
        
            if (currentPlayer === players[0]) { //idk why it's making me get the definition of the variable again?
                let name2Str = name2()
                currentPlayer = players[1] //sets the argument, not redefining a variable
                cell.innerHTML = players[0]
                board[currentCell] = players[0]
                result.innerHTML = ''
                result.innerHTML =  name2Str + " 's turn!"  //Every time I click this, a comma gets added to the name. I have no idea why 
                
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
    
    // if (event.target.innerHTLML === players[0] || event.target.innerHTML === players[1]) {
    //     return; //makes sure you can't click on the same thing twice
    //   }  
       wins()
    }) 
})
//singleplayer
//iterate through the grid 
//reference sudoku 

function wins() {
    for (let i = 0; i < boardWins.length; i++) {
        let win = boardWins[i] //this is only the rows in the boardWins. We want to get the elements within boardWins[i]
        //so win's elements' indexes would all be 0, 1, or 2. because the boardWins index is by row, and each element in the row has an index of 0, 1, or 2
        let zero = win[0] //every 0th index in each boardWins nested array
        let one = win[1] //every first index in each boardwins nested array
        let two = win[2] //every second index in each boardWins nested array
        // let name2Str = name2()
        // let name1Str = name1()
        if (players[0] === board[zero] && board[zero] === board[one] && board[one] === board[two]) {
            let name1Str = name1()
            result.innerHTML = name1Str + ' wins!'
            return;
        }
        if (players[1] === board[zero] && board[zero] === board[one] && board[one] === board[two]) {
            let name2Str = name2()
            result.innerHTML = name2Str + ' wins!'
            return;
        }
        if (!board.includes(null)) {
            result.innerHTML = 'Draw!'
        }
    }
}

let restartButton = document.getElementById('restart')
restartButton.addEventListener('click', function() {
    location.reload();
})

// function wins() {
//     for (let i = 0; i <= 8; i++) {
//         let win = boardWins[i]
//         if (board[win[0]] === '' || board[win[1]] === '' || board[win[2]] === '') { //accessing the indexes in boardWins individally and nesting them within the board. board[win[0]] = board[0] (index 0)
//             result.innerHTML = ''
//         }
//         else if (board[win[0]] === board[win[1]] && board[win[1]] === board[win[2]] && board[win[2]]) { //I want to link this to the cell.innerHTML
//             result.innerHTML = 'yay'
//             break
//         }
        
//     }
// }
//we need to break this loop when there is 3 in a row or a draw
//if the cell is clicked, it needs to return an 'x'






// let clickedCells = document.querySelectorAll('td')
//                 clickedCells.forEach(function(clickedCell) {
//                     clickedCell.addEventListener('click', function() {
//                         //element[j] = clickedCell.innerHTML
//                         if (clickedCell.innerHTML === '') {
//                             result.innerHTML = ''
//                         }
//                        else if (clickedCell.innerHTML === 'x') {
//                         element[j] = clickedCell.innerHTML
//                         //console.log(element[j]) //it works!
//                             if (element[0] === element[1] && element[1] == element[2]) {
//                                 console.log('yuh')
//                             }
                            
//                        }
//                     })
                   
//                 })















//IT'S SOMETHING ABOUT THE TD CELLS. THEY ARE NOT REGISTERING WITH THE BOARD. YOU HAVE TO LINK THEM.



// const bboard = document.getElementById('board');
// bboard.addEventListener('click', wins)



//let table = document.getElementsByTagName('table')[0]


// table.addEventListener('click', function(event) {
//     let td = event.target.closest('td'); //since tagName didn't work; guess and check 
//     console.log('clicked')
//     if (td.innerHTML === players[0] || td.innerHTML === players[1]) {
//       td.removeEventListener('click')
//     } 
//       if (!td) {
//       return;
//     } else if (currentPlayer === players[0]) { //idk why it's making me get the definition of the variable again?
//       currentPlayer = players[1] //sets the argument, not redefining a variable
//       return td.innerHTML = players[0]
//     } else if (currentPlayer === players[1]){
//       currentPlayer = players[0]
//       return td.innerHTML = players[1]
//     }

// })









  