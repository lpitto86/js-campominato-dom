document.addEventListener('DOMContentLoaded', generateGrid);

function generateGrid() {
    const gridContainer = document.getElementById('gameGrid');

    // Genera le celle della griglia
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = i;

        // Aggiungi l'evento di click a ogni cella
        cell.addEventListener('click', () => handleCellClick(cell, i));

        gridContainer.appendChild(cell);
    }
}

function handleCellClick(cell, cellNumber) {
    // Cambia il colore della cella cliccata
    cell.style.backgroundColor = 'lightblue';

    // Visualizza il numero della cella nella console
    console.log(`Cella cliccata: ${cellNumber}`);
}

function generateRandomBombs(totalCells, bombCount) {
      const bombs = [];
      
      while (bombs.length < bombCount) {
          const randomBomb = Math.floor(Math.random() * totalCells) + 1;
  
          // Verifica se il numero è già presente nell'array delle bombe
          if (!bombs.includes(randomBomb)) {
              bombs.push(randomBomb);
          }
      }
  
      return bombs;
}

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

        // Aggiungi l'evento di click a ogni cella
        cell.addEventListener('click', () => handleCellClick(cell, i, bombs));

        gridContainer.appendChild(cell);
    }

    console.log('Bombe:', bombs);
}