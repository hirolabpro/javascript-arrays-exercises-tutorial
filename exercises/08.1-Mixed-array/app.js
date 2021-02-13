var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var newArray=[];
mix.forEach(element => {
     newArray.push(typeof(element));
});
console.log(newArray);