function matrixBuilder(matrix){
      let newMatrix = [];
      let newArray = [];
      //matriz
      for (let x =0; x < matrix; x++){
        newMatrix.push(newArray)
      }
      //elementos
      for (let i =0; i < matrix; i++){
        newArray.push(Math.round(Math.random())) 
      }
      return newMatrix
    }
    
    let test = matrixBuilder(5)
    console.log(test);