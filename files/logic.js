const container = document.querySelector(".container");

function createGrid (rows, cols) {
    for (let i = 0; i <= (rows * cols)-1; i++) {
        const div = document.createElement('div');
        div.classList.add('block');
        div.textContent = i;
        container.append(div);
    }
}

createGrid (16,16);


// create divs -> organize on the page ->