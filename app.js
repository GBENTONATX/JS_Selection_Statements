console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


//EXCERCISE 1 


const favNumber = 42;

const userGuess = window.prompt("Input a number");

if (userGuess < favNumber) {
  console.log ("Too Low");
} else if (userGuess > favNumber) { 
  console.log("Too High");
} else {
  console.log("Congratulations!!!");
}

//Exercise 2//

const birthMonth = prompt("In What Month were you born?");

switch (birthMonth) {
case "december":
case "january": 
case "february":
  console.log ("Winter");
  break; 
case "march":
case "april":
case "may":
  console.log("Spring")
  break;
case "june":
case "july":
case "august":
  console.log ("Summer");
  break;
case "september":
case "october":
case "november":
  console.log("Autumn");
  break;  
} 


//Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default: 
    type = "Other";
}

switch(colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default: 
    type = "White";
}

switch(sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default: 
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);


