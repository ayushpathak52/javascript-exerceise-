// Write a program that takes a number and prints the multiplication table for that number.


function multiplicationTable(number) {
  
  for (let i = 1; i <= 10; i++) {
    
    let result = number * i;
   
    console.log(`${number} x ${i} = ${result}`);
  }
}


multiplicationTable(5);