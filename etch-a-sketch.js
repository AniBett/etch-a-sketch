const gridContainer = document.querySelector('.container')
let cell =[];
let selector = document.querySelector('#rangeInput')

let squaresPerSide = selector.value

let size = document.querySelector(".size")
let erase  = document.querySelector(".eraser")
let blackButton = document.querySelector(".black")
let randomButton= document.querySelector(".random")
let clearButton= document.querySelector(".clear")
function createGrid(squaresPerSide) {
    
    gridContainer.style.gridTemplateColumns = (`repeat(${squaresPerSide}, 1fr`);
    gridContainer.style.gridTemplateRows = (`repeat(${squaresPerSide}, 1fr`);
    let numberOfCells = squaresPerSide * squaresPerSide;
    for(let i = 0; i<numberOfCells; i++) {
      cell[i] = document.createElement('div');
      cell[i].classList.add('cell');
      gridContainer.appendChild(cell[i]);
      cell[i].addEventListener('mouseover',() => cell[i].style = 'background-color: black')
      
    }
  }

function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}

function clearGrid(){
  removeAllChildNodes(gridContainer)
   console.log(selector.value)
   squaresPerSide = selector.value
   createGrid(squaresPerSide)
   size.innerHTML = squaresPerSide+'x'+squaresPerSide
}

function eraser(){
  let numberOfCells = squaresPerSide * squaresPerSide;
  for(let i = 0; i<numberOfCells; i++) {
    cell[i].addEventListener('mouseover',() => cell[i].style = 'background-color: : rgba(255, 255, 255, 1)')
  }
}

function blackFill(){
  let numberOfCells = squaresPerSide * squaresPerSide;
  for(let i = 0; i<numberOfCells; i++) {
    cell[i].addEventListener('mouseover',() => cell[i].style = 'background-color: black')
  }
}
function randomChoice(){
  let numberOfCells = squaresPerSide * squaresPerSide;
  for(let i = 0; i<numberOfCells; i++) {
    let num1 = Math.floor(Math.random() * 256);  
    let num2 = Math.floor(Math.random() * 256)
    let num3 = Math.floor(Math.random() * 256)
    cell[i].addEventListener('mouseover',() => cell[i].style = `background-color: rgb(${num1}, ${num2}, ${num3})`)
  }
}

function reset(){
  let numberOfCells = squaresPerSide * squaresPerSide;
  for(let i = 0; i<numberOfCells; i++) {
    cell[i].style = 'background-color: : rgba(255, 255, 255, 1)'
  }
}





createGrid(squaresPerSide)
selector.addEventListener('click', clearGrid)
erase.addEventListener('click', eraser)
blackButton.addEventListener('click', blackFill)
randomButton.addEventListener('click', randomChoice)
clearButton.addEventListener('click',reset)




