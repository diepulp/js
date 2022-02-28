//Assignment: Chapter 3 Practice
//Author: Vladimir Ivanov
//Date: 02/01/22

window.onload = () => {
  let button = document.querySelector("button");
  button.addEventListener(
    "click",
    () => {
      printGibberish();
    },
    false
  );

 heeHawRecursive(15);
  
};

function printGibberish() {
  let inputField = document.getElementById("numInput");
  let input = inputField.value;
  if (input < 0){
    let error = document.createElement('li');
    let errorMessage = document.createTextNode("The number cannot be negative");
    let position = document.querySelectorAll("ul")[0];
    

    position.className = "err";
    error.appendChild(errorMessage);
    position.appendChild(error);
  } 
else {
  for (let i = 0; i <= input; ++i) {
    let textReturned = heeHaw(i);
    let position = document.querySelector("ul");
    let newText = document.createTextNode(textReturned);
    let newElement = document.createElement("li"); 
    newElement.appendChild(newText);
    position.appendChild(newElement);
  }
}
}

function heeHaw(count) {
  let text = "";
  for (let i = 1; i <= count; i++) {
    i % 3 == 0 && i % 5 == 0
      ? (text = "Hee, Haw!")
      : i % 3 == 0
      ? (text = "Hee!")
      : i % 5 == 0
      ? (text = "Haw!")
      : (text = " " + i);
  }
  return text;
}

function heeHawRecursive(count) {
  
  if (count === 0) return;

  count % 3 == 0 && count % 5 == 0
    ? (console.log( "Hee, Haw!"))
    : count % 3 == 0
    ? (console.log( "Hee!"))
    : count % 5 == 0
    ? (console.log( "Haw!"))
    : (console.log( count));

   heeHawRecursive(count - 1);
}
