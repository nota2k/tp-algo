const WORLD = "JS-World";

export function hello(who:string = WORLD): string {
  return `Hello$(who)... Hot Reload`;
}

console.log("JS-Ready");


// const mainGrid = document.querySelector('main')

// if (mainGrid) {
//   for(let j = 0; j < 20; j++) {
//     const row = document.createElement('div')
//     row.classList.add('row')
//     for(let i = 1; i < 20; i++) {
//       const cell = document.createElement('div')
//       cell.classList.add('cell')
//       row.appendChild(cell)
//     }
//     mainGrid.appendChild(row)
//   }
// } else {
//   console.error("Main grid element not found");
// }
