var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
     firstArray.forEach(item => {
        newArray.push(item)
    })
    // loop the SECOND array and add each item to newArray
    secondArray.forEach(item => {
        newArray.push(item)
    })
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));