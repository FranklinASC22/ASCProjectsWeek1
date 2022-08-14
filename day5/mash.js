
// STEP 2
function mash(){

    return ("You will live in a "+ getHome()+", travel to "
    +travCount()+" countries, and own a pet "+getPet());
}
mash()
 let result = mash();
 console.log(result);

// STEP 3

 function randNumGen(Number){
    let mu = Math.random()  * Number;
    let fin = Math.floor(mu);
    return fin;
 }
let randNum = randNumGen(10);
console.log(randNum);

//STEP 4
function getHome(){
    let array = ['Mansion','Castle','Shack','House',process.argv[2]];
    let fin = randNumGen(array.length);
    return array[fin];
}
let out = getHome();
console.log(out);

// STEP 5
function travCount(){
    let var1 = randNumGen(100);
    return var1;
}
let call= travCount();
console.log(call);
// STEP 6/8

function getPet(){
    let ar2= ["Dragon","Pheonix","White Tiger","Black Turtle","Griffin","Hydra"];
    let end = randNumGen(ar2.length);
    let us1= randNumGen(2);
    // I differed from step 8 a little bit by using an if-state
    if(process.argv[3].length <= 3){
        return ar2[end];
    }
    else{
        return process.argv[3];
    } 
}
let git = getPet();
console.log(git);







