/*
// PART 1
function combineStrings(str1,str2){
    let result = str1 + str2;
    return result;
  
}

let s1 = combineStrings("ABC","DEF");
let s2 = combineStrings("Poke","mon");
let s3 = combineStrings("Friend","ship");
let s4 = combineStrings("1","2");

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
*/

// PART 2
/*
// PART 3
function checkAns(num1, num2, op, answ) {
    if (op == "+") {
        if (num1 + num2 == answ) {
            console.log("True");
            
        }
        else { console.log("False"); }
    }
    
    if (op == "-") {
        if (num1 - num2 == answ) {
            console.log("True");
        }
        else { console.log("False"); }
    }
}
let b1 = checkAns(3, 5, "+", 8);
let b2 = checkAns(9, 8, "+", 15);
let b3 = checkAns(5, 4, "-", 1);
let b4 = checkAns(0, 1, "-", -2);
*/


// PART 4
function oddNumCatch(number){
    
  for (i = 0; i < number.length; i++){
    console.log(number[i]);
    //     if(number[i] % 2 >= 1 || number[i] % 2 < 0){
    //         return i;
    //     }
    //     else{return -1;}
     }
}
let i1 = oddNumCatch([8, 22, 10, 15, 2, 50, 28]);
// let i2 = oddNumCatch([1, 2, 3, 4, 5]);
// let i3 = oddNumCatch([2, 2, 2, 2, 2, 2, 2, 2]);
// let i4 = oddNumCatch([]);
console.log(i1);
// console.log(i2);
// console.log(i3);
// console.log(i4);


