let userGuess = process.argv[2];
let answer = 5;
let score = 0;

if(userGuess == answer){
    console.log("Correct Guess!")
    score +=5;
}


else if(userGuess < answer)
{console.log("Too Low")
score -= 1;
}
else{
    console.log("too HIGH")
    score -=1;
}
console.log("Final Score", score);