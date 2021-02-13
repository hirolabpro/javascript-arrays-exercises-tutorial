function sumTheElements(array){
	
	var total = 0;
	
	//your code here
    for (let index = 0; index < array.length; index++) {
       total += array[index];        
    }

	return total;
}
console.log(sumTheElements([2,13,34,5]))