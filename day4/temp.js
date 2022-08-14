function oddNumCatch([number]){
    
    for (i = 0; i< number; i++){
          if(number[i] % 2 == 0){
              console.log( number[i],"is EVEN!!!");
          }
          else if(number % 2 >= 1 || number % 2 < 0){
              console.log( number[i],"is ODD!!!");
          }
          else{console.log("-1");}
      }
  }
  let i1 = oddNumCatch([8, 22, 10, 15, 2, 50, 28]);
  //let i2 = oddNumCatch([1, 2, 3, 4, 5]);
  //let i3 = oddNumCatch([2, 2, 2, 2, 2, 2, 2, 2]);
  //let i4 = oddNumCatch([]);