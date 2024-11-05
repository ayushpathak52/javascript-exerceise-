// Write a program that displays a string in reverse order.


const originalString = "CodeHelp";


function reverseString(str) {
  
  const reversedString = str.split("").reverse().join("");
  
  return reversedString;
}


console.log(reverseString(originalString));

//output -- pleHedoC