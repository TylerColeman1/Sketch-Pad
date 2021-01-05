// your javascript file
//height: 25%;
//width: 25%;


function alert(e){
    randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    this.style.backgroundColor = randomColor; // can get rid of grid:hover to keep color the same, and changin opacity to 1
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addNewGrid(numberOfGrids){
    const container = document.querySelector('#container'); // select the container div
    width = (100 / numberOfGrids).toString(); 
    for(i =0; i<numberOfGrids * numberOfGrids; i++){
        const gridSquare = document.createElement('div');                                
        gridSquare.classList.add('grid');
        gridSquare.textContent = 'I am grid';
        gridSquare.style.width = width + '%';
        gridSquare.style.height = width + '%';
        container.appendChild(gridSquare)
    }

    const gridSquare = document.getElementsByClassName("grid"); // can't use query selector will reference the DOM before these items are appended, and the list is never updated thereafter. Therefore, it’s list will never know when the images are appended to the DOM.
    for(let i = 0; i < gridSquare.length; i++){ // could simplify this probably
        gridSquare[i].addEventListener('mouseenter', alert);
    }
}


function promptUser(e){
    numberOfGrids = window.prompt('Select the number of squares (less than 100)', '20');
    while(numberOfGrids > 100){
        numberOfGrids = window.prompt('Select the number of squares (less than 100)', '20');
    }

    const container = document.querySelector('#container');
    removeAllChildNodes(container);
    addNewGrid(numberOfGrids);
}

function add16x16grid(){
    const container = document.querySelector('#container'); // select the container div
    width = (100 / 4).toString(); 
    console.log(width);
    for(i =0; i<16; i++){
        const gridSquare = document.createElement('div');                                
        gridSquare.classList.add('grid');
        gridSquare.textContent = 'I am grid';
        gridSquare.style.width= width + '%';
        gridSquare.style.height = width + '%';
        container.appendChild(gridSquare)
    }


    const gridSquare = document.getElementsByClassName("grid"); // can't use query selector will reference the DOM before these items are appended, and the list is never updated thereafter. Therefore, it’s list will never know when the images are appended to the DOM.
    for(let i = 0; i < gridSquare.length; i++){ // could simplify this probably
        gridSquare[i].addEventListener('mouseenter', alert);
    }
    
    const newGridButton = document.querySelector('.newGrid');
    newGridButton.addEventListener('click', promptUser);
};

window.addEventListener("load", add16x16grid); // wait for page to load then



