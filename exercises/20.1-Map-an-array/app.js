    var _arrayOfCelsiusValues = [-2,34,56,-10];

    var _arrayOfFahrenheitValues = _arrayOfCelsiusValues.map(function(_value){
	
	      //add your code here and return the new value
	      return (_value * 9/5) + 32
    });

console.log(_arrayOfFahrenheitValues);


