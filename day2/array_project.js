/*
semi-colon is just seperating two different outputs of one code
Program A Output: B; D; Undefined
Program B Output: Mon; Sun; 7; Undefined; Sun
Program C Output: ["Do","Re","Mi","Fa","So"]; ["Do","Re"];[]
*/
// Part 2
let scores = [85, 93, 65, 65, 92, 81, 93];
let a = scores[0];
let b = scores[1];
let c = scores[2];
let d = scores[3];
let e = scores[4];
let f = scores[5];
let g = scores[6];
let sum = a + b + c + d + e + f + g;
let avg = sum/7
console.log('Average:', avg);
// Part 3
/*
Transformation 1: The code used the "reverse()" 
to reverse the order of the array.

Transformation 2: The code uses the "push()" to 
add items "1" and "2" to the end of the array.

Transformation 3: The code uses the pop() to remove 
"d" at the end of the array.

Transformation 4: The code uses the splice() to change "b" and 
"d" to"c" and"e" respectively.

Transformation 5: The code reverses then splices to add 
"e" and "f" as well as remove "d".

*/
