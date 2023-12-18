document.addEventListener('DOMContentLoaded', generateGame);

function generateGame() {
  const totalCells = 100;
  const bombCount = 16;
  const gridContainer = document.getElementById('gameGrid');
  const bombs = generateRandomBombs(totalCells, bombCount);

  for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.textContent = i;

    // Aggiungi la classe 'bomb' alle caselle che contengono bombe
    if (bombs.includes(i)) {
      cell.classList.add('bomb');
    }

    cell.addEventListener('click', () => handleCellClick(cell, i, bombs));

    gridContainer.appendChild(cell);
  }

  console.log('Bombe:', bombs);
}

function generateRandomBombs(totalCells, bombCount) {
  const bombs = [];

  while (bombs.length < bombCount) {
    const randomBomb = Math.floor(Math.random() * totalCells) + 1;

    if (!bombs.includes(randomBomb)) {
      bombs.push(randomBomb);
    }
  }

  return bombs;
}

function handleCellClick(cell, cellNumber, bombs) {
  if (bombs.includes(cellNumber)) {
    // La cella cliccata è una bomba
    revealAllBombs();
    alert('Boom! Hai colpito una bomba! Partita terminata.');
  } else {
    // La cella cliccata non è una bomba
    cell.style.backgroundColor = 'lightblue';
    console.log(`Cella cliccata: ${cellNumber}`);
  }
}

function revealAllBombs() {
  // Ottieni tutte le caselle che contengono bombe
  const bombCells = document.querySelectorAll('.bomb');

  // Rendi rosse tutte le caselle che contengono bombe
  bombCells.forEach((bombCell) => {
    bombCell.style.backgroundColor = 'red';
  });

  // Disabilita la possibilità di cliccare su altre caselle
  const allCells = document.querySelectorAll('.grid-cell');
  allCells.forEach((cell) => {
    cell.removeEventListener('click', handleCellClick);
  });
}

function handleCellClick(cell, cellNumber, bombs) {
  if (bombs.includes(cellNumber)) {
    // La cella cliccata è una bomba
    revealAllBombs();
    revealNonBombCells();
    alert('Boom! Hai colpito una bomba! Partita terminata.');
  } else {
    // La cella cliccata non è una bomba
    cell.style.backgroundColor = 'lightblue';
    console.log(`Cella cliccata: ${cellNumber}`);
  }
}

function revealNonBombCells() {
  // Ottieni tutte le caselle che non contengono bombe
  const nonBombCells = document.querySelectorAll('.grid-cell:not(.bomb)');

  // Rendi azzurre tutte le caselle che non contengono bombe
  nonBombCells.forEach((cell) => {
    cell.style.backgroundColor = 'lightblue';
  });

  // Disabilita la possibilità di cliccare su altre caselle
  const allCells = document.querySelectorAll('.grid-cell');
  allCells.forEach((cell) => {
    cell.removeEventListener('click', handleCellClick);
  });
}