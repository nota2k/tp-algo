let WORLD = 'JS-World';

function hello(who) {
     return 'Hello, ' + (who || WORLD);
}

const mainGrid = document.querySelector('main')

if (mainGrid) {
     for (let j = 0; j < 20*20; j++) {
          const cell = document.createElement('div')
          cell.classList.add('cell')
          mainGrid.appendChild(cell)
     }
} else {
     console.error("Main grid element not found");
}