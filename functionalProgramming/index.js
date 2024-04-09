import {  compose,pipe} from 'lodash/fp'
import { produce } from 'immer'
// function sayHello(){
//     return "hello world"
// }
// let fn=sayHello
// console.log();fn()\

/*

let input = "   JS  "
let output = "<div>" + input + "</div>"

const trim = str => str.trim();
const wrap = type =>str => `<${type}> ${str}</${type}>`;

let result=wrapInDiv(trim(input)) 

// Using lodash to make codes  cleaner

// const transfrom= compose(wrapInDiv,trim);
 const transfrom= pipe(trim,wrap("div"));
 result =transfrom(input)
 console.log(result);
 export default result;
 */


//Practicing Immutability

const numbers= [1,2,3];

const index= numbers.indexOf(2);
// Adding
const added= [...numbers.slice(0,index),
4,
...numbers.slice(index,numbers.length -1) 
]
// Removing
const removed = numbers.filter( n => n !== 2);

// Updating
const updated = numbers.map(n =>n ===2 ? 20 : n);

 const recipe = {
    name: "Spaghetti Bolognese",
    ingredients: ["egg", "salt"]
    }

//   Adding a new ingredient
const ingredientsAdd= [...recipe.ingredients, "cream"];
console.log(ingredientsAdd);

// Updating ingredients

const ingredientsUpdated = recipe.ingredients.map (ing => ing === "egg" ? "egg white": ing);
console.log(ingredientsUpdated);
// Removing existing ingredient
const ingredientsRemove = recipe.ingredients.filter(ing => ing !== "egg")
console.log(ingredientsRemove);
let book ={title:"Harry Potter"}
 function publish (book){
   return produce(book,draftBook =>{
     draftBook.published = true
   })
 }

let updated2= publish(book)
 console.log(updated2);

console.log("Hello World!");