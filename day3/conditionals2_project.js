/*Part 1
Final Evaluation 1(Question 1): False
Final Evaluation 2(Question 2): True
Boolean Expression(Question 3): True
Boolean expresion(Question 4): True
*/

//Part 2
let grade = process.argv[2];


if (grade == null) {
    console.log('Error');
}
else if (grade < 0 || grade > 100) {
    console.log('Out of Range..');
}
else if (grade >= 90 && grade <= 100) {
    console.log('A-Congrats!!! Keep it up');
}
else if (grade >= 80 && grade <= 90) {
    console.log('B-Good work. Keep at it.');
}
else if (grade >= 70 && grade <= 79) {
    console.log('C-Please try harder');
}
else if (grade >= 60 && grade <= 70) {
    console.log('D-Please try harder');
}
else if (grade < 60) {
    console.log('F-Come see me :( ');
}else{
    console.log('Error');
}





