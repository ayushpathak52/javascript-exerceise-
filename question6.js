// Write a program that takes a number and checks whether it is positive, negative, or zero


function checkNumber(number) {
 // Check if the number is positive
  if (number > 0) {
    console.log(`${number} is positive`);
  }
  // Check if the number is negative
  else if (number < 0) {
    console.log(`${number} is negative`);
  }
 
  else {
    console.log(`${number} is zero`);
  }
}

//outputs 

checkNumber(10); // Output: "10 is positive"
checkNumber(-5); // Output: "-5 is negative"
checkNumber(0); // Output: "0 is zero"
checkNumber(1); // Output: "1 is positive"
checkNumber(-1); // Output: "-1 is negative"