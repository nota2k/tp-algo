const WORLD = "JS-World";

export function hello(who:string = WORLD): string {
  return `Hello$(who)... Hot Reload`;
}

console.log("JS-Ready");

const mainGrid = document.querySelector("main");

if (mainGrid) {
  const totalCells = 20 * 20;
  const bombCount = Math.floor(totalCells * 0.1); // 10% des cellules
  const bombIndices = new Set();

  // Générer des indices uniques pour les bombes
  while (bombIndices.size < bombCount) {
    const randomIndex = Math.floor(Math.random() * totalCells);
    bombIndices.add(randomIndex);
  }

  for (let j = 0; j < totalCells; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    if (bombIndices.has(j)) {
      cell.innerHTML = "&#128163"; // Insérer le caractère "💣"
    }
    mainGrid.appendChild(cell);
  }
} else {
  console.error("Main grid element not found");
}
