let lastBoardCellNumber = 16

function createBoard(boardcells) {
    let boardsize = 320;
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${boardcells} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${boardcells} , 1fr)`;

    for (i = 0; i < (boardcells * boardcells); i++) {
        let square = document.createElement("div");
        let gridsize = boardcells / boardsize

        square.classList.add("boardcell");
        square.setAttribute('id', `${i}_cell`);
        square.style.border = "solid 1px black";
        square.style.width = gridsize;
        square.style.height = gridsize;
        board.appendChild(square);
    }

    lastBoardCellNumber = boardcells;
}

function removeOldBoard(lastBoardCellNumber){

    for (i = 0; i < (lastBoardCellNumber * lastBoardCellNumber); i++) {
        let board = document.querySelector('.board');
        let oldSquare = document.getElementById(`${i}_cell`);
        board.removeChild(oldSquare);
    }

}

function resetGrid(num){
    console.log(num);
    if(num < 2 || num > 100){
        let err = document.querySelector(".resize_err")
        err.style.display = "block";
        err.innerHTML = "Please enter a valid number not greater than 100."
    }
    else{
        removeOldBoard(lastBoardCellNumber);
        createBoard(num);
    }
}

createBoard(16);