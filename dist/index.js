"use strict";
const WORLD = "JS-World";
const mainGrid = document.querySelector("main");
if (mainGrid) {
    const totalCells = 20 * 20;
    const bombCount = Math.floor(totalCells * 0.1); // 10% des cellules
    const bombIndices = new Set();
    const gridSize = 20;
    // Générer des indices uniques pour les bombes
    while (bombIndices.size < bombCount) {
        const randomIndex = Math.floor(Math.random() * totalCells);
        bombIndices.add(randomIndex);
    }
    // Fonction pour obtenir les indices des voisins d'une cellule
    function getNeighbors(index) {
        const neighbors = [];
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0)
                    continue;
                const neighborRow = row + i;
                const neighborCol = col + j;
                if (neighborRow >= 0 &&
                    neighborRow < gridSize &&
                    neighborCol >= 0 &&
                    neighborCol < gridSize) {
                    neighbors.push(neighborRow * gridSize + neighborCol);
                }
            }
        }
        return neighbors;
    }
    // Fonction pour compter les bombes voisines
    function countBombNeighbors(index) {
        const neighbors = getNeighbors(index);
        return neighbors.filter((neighbor) => bombIndices.has(neighbor)).length;
    }
    // Fonction pour révéler une cellule
    function revealCell(cell, index) {
        if (cell.classList.contains("revealed"))
            return;
        cell.classList.add("revealed");
        if (bombIndices.has(index)) {
            cell.innerHTML = "&#128163"; // Insérer le caractère "💣"
        }
        else {
            const bombNeighbors = countBombNeighbors(index);
            if (bombNeighbors > 0) {
                cell.innerHTML = bombNeighbors.toString();
            }
            else {
                const neighbors = getNeighbors(index);
                neighbors.forEach((neighbor) => revealCell(mainGrid === null || mainGrid === void 0 ? void 0 : mainGrid.children[neighbor], neighbor));
            }
        }
    }
    for (let j = 0; j < totalCells; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => revealCell(cell, j));
        mainGrid.appendChild(cell);
    }
}
else {
    console.error("Main grid element not found");
}
