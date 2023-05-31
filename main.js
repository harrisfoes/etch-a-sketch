let lastBoardCellNumber = 16
let chosenColor = "black";
let rainbowMode = false;

function createBoard(boardcells) {
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${boardcells} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${boardcells} , 1fr)`;

    for (i = 0; i < (boardcells * boardcells); i++) {
        let square = document.createElement("div");

        square.classList.add("boardcell");
        square.setAttribute('id', `${i}_cell`);
        square.style.border = "solid 1px black";

        board.appendChild(square);

        square.addEventListener('mouseover', (event) => {

            if(rainbowMode)
                changeColor();

            event.target.style.backgroundColor = chosenColor;

        });
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

function resizeGrid(num){
    
    let err = document.querySelector(".resize_err");

    if(num < 1 || num > 100){
        err.style.display = "block";
        err.innerHTML = "Please enter a valid number not greater than 100."
    }
    else{
        removeOldBoard(lastBoardCellNumber);
        createBoard(num);
        err.style.display = "none";
    }
}

function changeColor(){   
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    chosenColor = "#" + randomColor;
}

function rainbowOn(){
    rainbowMode = true;
}

function backInBlack(){
    chosenColor = "black";
    rainbowMode = false;
}

function resetBoard(){
    backInBlack();
    removeOldBoard(lastBoardCellNumber);
    createBoard(lastBoardCellNumber);
}

createBoard(16);