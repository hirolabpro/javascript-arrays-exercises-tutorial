let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
var buscar = 'Aria';
function filterByName (names,buscar) = names.filter((value)=>{
    return value == buscar;
},buscar)

console.log(filterByName(names, buscar));

//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])