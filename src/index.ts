const WORLD = "JS-World";

export function hello(who:string = WORLD): string {
  return `Hello$(who)... Hot Reload`;
}

console.log("JS-Ready");

window.addEventListener("load", ()=>{
  document.body.textContent = hello();
});
