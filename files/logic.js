const container = document.querySelector(".container");

function createGrid2 (rows, cols) {
    for (let i = 0; i <= (rows * cols); i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        div.textContent = i;
        container.append(div);
    }
}

createGrid2 (16,16);


// create divs -> organize on the page ->