const WORLD = "JS-World";

const mainGrid = document.querySelector("main");

if (mainGrid) {
  const totalCells = 20 * 20;
  const bombCount = Math.floor(totalCells * 0.1); // 10% des cellules
  const bombIndices = new Set();
  const gridSize = 20;

  while (bombIndices.size < bombCount) {
    const randomIndex = Math.floor(Math.random() * totalCells);
    bombIndices.add(randomIndex);
  }

  function getNeighbors(index: number): number[] {
    const neighbors = [];
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const neighborRow = row + i;
        const neighborCol = col + j;
        if (
          neighborRow >= 0 &&
          neighborRow < gridSize &&
          neighborCol >= 0 &&
          neighborCol < gridSize
        ) {
          neighbors.push(neighborRow * gridSize + neighborCol);
        }
      }
    }
    return neighbors;
  }

  function countBombNeighbors(index: number): number {
    const neighbors = getNeighbors(index);
    return neighbors.filter((neighbor) => bombIndices.has(neighbor)).length;
  }

  function revealCell(cell: HTMLElement, index: number) {
    if (cell.classList.contains("revealed")) return;
    cell.classList.add("revealed");

    if (bombIndices.has(index)) {
      cell.innerHTML = "&#128163";
    } else {
      const bombNeighbors = countBombNeighbors(index);
      if (bombNeighbors > 0) {
        cell.innerHTML = bombNeighbors.toString();
      } else {
        const neighbors = getNeighbors(index);
        neighbors.forEach((neighbor) =>
          revealCell(mainGrid?.children[neighbor] as HTMLElement, neighbor)
        );
      }
    }
  }

  for (let j = 0; j < totalCells; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => revealCell(cell, j));
    mainGrid.appendChild(cell);
  }
} else {
  console.error("Main grid element not found");
}
