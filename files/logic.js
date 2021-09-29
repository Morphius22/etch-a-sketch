const container = document.querySelector(".container");

function createGrid (rows, cols) {
    for (let i = 0; i <= (rows * cols)-1; i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        //div.textContent = i;
        container.append(div);
    }
}

function changeColor (event) {
    event.target.style.backgroundColor = "#4b14e0";
    //event.target.style.opacity += 0.1;
}

function resetBoard () {
    removeBoard();
    let boardSize = prompt ("How large of a board would you like?", "16")
    let x = boardSize;
    boardSize = parseInt(x);
    createGrid (boardSize, boardSize);
    addSketch();
}

function addSketch () {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => block.addEventListener("mouseover", changeColor));
    console.log (blocks);
}

function removeBoard (event) {
    const blocks = document.querySelectorAll('.block');

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].remove();
    }
}

createGrid (16,16);
addSketch ();

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', resetBoard)

// while (run == true) {
//     let i = 0;
//     let selection = block[i];
//     document.addEventListener('DOMContentLoaded', function () {
//         selection.addEventListener("mouseover", function(e) {
//             block.id = 'colored';
//             i++

//         if (i == 256) {
//             i = 0;
//         }
//         })
//     });
// }

// create divs -> organize on the page ->