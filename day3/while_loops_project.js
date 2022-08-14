
//Part 1a
let num = 100;
 
while (num > 0) {
   console.log(num);
   num--;
}

//Part 1b
let num2 = process.argv[2];
 
while (num2 > 0) {
   console.log(num2);
   num2--;
}

/*Part 2
Question 1: 3 
Question 2: Infinite amount. p.s. heart stopped cause I taught laptop would crash.
Question 3: 5 
Question 4: 2
Question 5: Answer is the code comment below with the console.log('Lebron').

let a = 0;
while (a < 10) {
    
    console.log('Lebron');
    a++; 
}
*/

//Part 3a
//Random Number 1
    let Deci = Math.random();
    let Num = Deci * 11;
    let Int = Math.floor(Num);

    //Random Number 2
    let Deci2 = Math.random();
    let Num2 = Deci2 * 11;
    let Int2 = Math.floor(Num2);

while (Int != Int2) {
    //Output
    console.log("Random Number 1:", Int,"Random Number 2:", Int2);
    //Random Number 1
     Deci = Math.random();
     Num = Deci * 11;
     Int = Math.floor(Num);

    //Random Number 2
     Deci2 = Math.random();
     Num2 = Deci2 * 11;
     Int2 = Math.floor(Num2);
}
if (Int == Int2) {
    console.log("Random Number 1:", Int,"Random Number 2:", Int2);
    console.log('Same Random Numbers! End Loop!');
}

//Part 3b

//Random Number 1
let Decimal = Math.random();
let Numa = Decimal * 11;
let Integer = Math.floor(Numa);

//Random Number 2
let Decimal2 = Math.random();
let Numa2 = Decimal2 * 11;
let Integer2 = Math.floor(Numa2);

let counter = 1;

while (Integer != Integer2) {
//Output
console.log("Random Number 1:", Integer,"Random Number 2:", Integer2);
//Random Number 1
 Decimal = Math.random();
 Numa = Decimal * 11;
 Integer = Math.floor(Numa);

//Random Number 2
 Decimal2 = Math.random();
 Numa2 = Decimal2 * 11;
 Integer2 = Math.floor(Numa2);
 
 counter++
}
if (Integer == Integer2) {
console.log("Random Number 1:", Integer,"Random Number 2:", Integer2);
console.log('Same Random Numbers on Try',counter,'. End Loop!');
}

