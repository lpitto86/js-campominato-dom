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