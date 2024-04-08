// function sayHello(){
//     return "hello world"
// }
// let fn=sayHello
// console.log();fn()

let input = "   JS  "
let output = "<div>" + input + "</div>"

const trim = str => str.trim();
const wrapInDiv = str => `<div> ${str}</div>`;

let result=wrapInDiv(trim(input)) 
console.log(result);