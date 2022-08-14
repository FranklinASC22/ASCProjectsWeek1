/*//PART 1
function evenORodd(Number){
    if(Number % 2 == 0){
        console.log( Number,"is EVEN!!!");
    }
    else if(Number % 2 >= 1 || Number % 2 < 0){
        console.log( Number,"is ODD!!!");
    }

}
evenORodd();
*/
/*//PART 2
function divisor( Number, name){
    if(Number % name == 0){
        console.log( Number +" IS divisible " + name);
    }
    else if(Number % name >= 1 || Number % name < 0){
        console.log( Number + " is NOT divisible " + name);
    }

}
divisor(27,5);
*/
/*
// PART 3

function disCalc( name1, x1, y1 ,name2, x2, y2){
    let calc = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    let fin = Math.floor(calc)
    
    console.log(name1 +" and " +name2+ " are "+ fin+ " unit(s) apart." );

}
disCalc("Jake",5,8,"Steph",4,8);
*/

//PART 4
let at = [];
function arrayHandler(at) {
    for(i=0;i<at.length;i++){
    if(typeof at[i]=="string"){
        console.log(at[i]);
    }
    
    }
}
arrayHandler([1, "a", 2, "b", 3, "c"]);
arrayHandler(['H', 'E', 'L', false, true, 1, 2, 55, 'L', 'O']);
arrayHandler(['string numbers', '1', '2', '3']);


















