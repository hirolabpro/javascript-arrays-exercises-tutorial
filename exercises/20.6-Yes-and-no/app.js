let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
var array = theBools.map(value=>{
    if (value===0) {
        return "woko";
    }else{
        return "wiki";
    }
})
console.log(array);