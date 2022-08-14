
//Part 1
//Random Number 1
let Decimal = Math.random();
let Num = Decimal * 11;
let Int = Math.floor(Num);

//Random Number 2
let Decimal2 = Math.random();
let Num2 = Decimal2 * 11;
let Int2 = Math.floor(Num2);
let Sum = Int + Int2;

//Output
console.log("Random Number 1:", Int);
console.log("Random Number 2:", Int2);
console.log("Sum:", Sum);

// Part 2
let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];
// Random Day
let decVar = Math.random();
let numVar = decVar * days.length;
let intVar = Math.floor(numVar);

let final= days[intVar]

// Random Reactions
let decVar2 = Math.random();
let numVar2 = decVar2 * reactions.length;
let intVar2 = Math.floor(numVar2);

let final2 = reactions[intVar2]

console.log("Random Day:",final);
console.log("Random React:",final2);

