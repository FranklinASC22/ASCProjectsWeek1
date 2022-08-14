/*
Part 1
semi-colon used to seperate two or more outputs
Program 1: @ ; #
Program 2: @
Program 3: @ ; ^
Program 4: -3
Program 5: "true blocks are executed"
*/

//Part 2
let input = process.argv[2];
let Decimal = Math.random();
let Num = Decimal * 101;
let Int = Math.floor(Num);
 
console.log("Random Number:", Int);
console.log("Your Guess:",input);
if(input == Int ){console.log("Right!")}
if(input < Int){console.log("Too LOW!")}
if(input > Int){console.log("Too HIGH")}


// Part 3
let userGuess = process.argv[2];
let answer = 5;
let score = 0;

if(userGuess == 'A'||userGuess=='B'){
    console.log("Wrong Answer :(");
    score -=1;
}
 else if(userGuess == 'C' ){
    score += 5;
    console.log("Right Answer!!! WOHOOOO");
}
 else if(userGuess =='D'){
    score -=50;
    console.log("Bad Bad Bad");
}
 else if(userGuess == 'I.KNOW.THE.SECRET'){
    console.log("Welcome to NIRVANA!!!");
    score +=1,000,000;
}
else{
    console.log("Invalid Respone");
    score = score;
}
console.log("Final Score", score);
