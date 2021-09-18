const container = document.querySelector(".container");

//creates a div and appends it to the container div
function createSpan1 () {
    const span = document.querySelector('span')
    span.classList.add('grid-row1');
    container.append(span);
}

function createSpan2 () {
    const span = document.querySelector('span')
    span.classList.add('grid-row2');
    container.append(span);
}

function createSpan3 () {
    const span = document.querySelector('span')
    span.classList.add('grid-row3');
    container.append(span);
}

function createDiv1 () {
    const span1 = document.querySelector('.grid-row1')
    const div = document.createElement('div');
    div.classList.add('grid-item');
    span1.append(div);
}

function createDiv2 () {
    const span2 = document.querySelector('.grid-row2')
    const div = document.createElement('div');
    div.classList.add('grid-item');
    span2.append(div);
}

function createDiv3 () {
    const span3 = document.querySelector('.grid-row3')
    const div = document.createElement('div');
    div.classList.add('grid-item');
    span3.append(div);
}

function createGrid () {
    createSpan1();
    createDiv1();
    createDiv1();
    createDiv1();
    createDiv1();
    
    createSpan2();
    createDiv2();
    createDiv2();
    createDiv2();
    createDiv2();

    createSpan3();
    createDiv3();
    createDiv3();
    createDiv3();
    createDiv3();

}

createGrid ()