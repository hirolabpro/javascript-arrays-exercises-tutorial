 let output = [];
    let i = 20;
    do {
        // Magic goes here;
        if (i % 5 === 0){
            output.push(i+"!")
            // console.log(i+"!")
        }
        else{output.push(i)}
        i--;
    } while (i > 0);
    console.log(output);
    console.log("LIFTOFF");

