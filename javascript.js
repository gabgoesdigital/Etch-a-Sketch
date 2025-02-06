const container = document.getElementById('container');

//Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
  addHoverEffect(); // Attach event listeners AFTER grid is created
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  for (let r = 0; r < rowNum; r++) {
    let row = document.createElement('div');
    row.className = 'gridRow';
    container.appendChild(row);
  }
}

//Creates columns
function makeColumns(cellNum) {
  let rows = document.getElementsByClassName('gridRow'); // Get rows dynamically
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      let newCell = document.createElement('div');
      newCell.className = 'cell';
      rows[i].appendChild(newCell);
    }
  }
}

// Function to add hover effect
function addHoverEffect() {
  const cells = document.querySelectorAll('.cell'); // Select cells after creation
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', (event) => {
      cell.classList.add('changeColor'); // Change color on hover
    });
  });
}

// Select the bottom

const button = document.querySelector('.popup');
// Function for the button
function createNewGrid(size) {
  container.innerHTML = ''; // Clear old grid

  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('gridRow');

    for (let j = 0; j < size; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}

button.addEventListener('click', () => {
  let size = prompt('Choose Your Number (max 100):'); // User input

  size = parseInt(size); // Convert to an integer
  if (isNaN(size) || size < 1 || size > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  createNewGrid(size); // Pass size to createNewGrid
  addHoverEffect(); // Add hover effect after the grid is created
});

defaultGrid();
