const words = ["apple" , "hritik", "happy"]

words.forEach(uppercase)

function uppercase(word, index, array){
    array[index] = word.toUpperCase();
    console.log(array[index]);
}

