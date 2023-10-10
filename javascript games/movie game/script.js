const movie = "Kick";
let guess = prompt("Guess the movie name");

while ((guess!= movie) && (guess != "quit")){
    guess = prompt("wrong guess. please guess again");  
}

if(guess == movie){
    console.log("Congratulation");
}

else{
    console.log("You Quit")
}