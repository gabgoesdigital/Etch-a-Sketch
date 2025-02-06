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

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken a color by 10%
function darkenColor(rgbString) {
  let match = rgbString.match(/\d+/g); // Extract RGB values
  if (!match) return 'rgb(0,0,0)'; // Default to black if parsing fails

  let [r, g, b] = match.map(Number);
  r = Math.max(0, r - Math.floor(r * 0.1));
  g = Math.max(0, g - Math.floor(g * 0.1));
  b = Math.max(0, b - Math.floor(b * 0.1));

  return `rgb(${r}, ${g}, ${b})`;
}

// Function to add hover effect
function addHoverEffect() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.dataset.darkness = 0; // Track darkness level

    cell.addEventListener('mouseover', () => {
      if (cell.dataset.darkness == 0) {
        let randomColor = getRandomColor();
        cell.style.backgroundColor = randomColor;
      } else {
        cell.style.backgroundColor = darkenColor(cell.style.backgroundColor);
      }
      cell.dataset.darkness = Math.min(10, Number(cell.dataset.darkness) + 1);
    });
  });
}

defaultGrid();
