var WORLD = 'JS-World';

function hello(who) {
     return 'Hello, ' + (who || WORLD);
}

console.log("JS-Ready");
window.addEventListener('load', function() {
     document.body.textContent = hello();
});