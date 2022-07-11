// alert('connected');
"use strict";

const checkGuess = () => {
  /*  generate a random number between 1 na 100. 
    multiply by 100, to change decimal place to 100.
    Add 1 before MAth functions to get 100 itself included in the range.
*/
  let cpuGuess = 1 + Math.floor(Math.random() * 100); //
  console.log(`picked num is: ${cpuGuess}`);

  // get guess from texbox
  let userGuess = parseInt(document.getElementById("guess").value);
  console.log(`guess is: ${userGuess}`);

  //validate guess
  if (isNaN(userGuess)) {
    // error message
    document.querySelector("h3").textContent = `Error missing or invalid data!`;
    document.querySelector("h3").style.color = "red";
    return; //returns from the function
  }

  //message
  let message = null;

  // compare guess to picked number
  if (userGuess == cpuGuess) {
    // display congralations message
    message = `Congratulations your guess is: ${userGuess}\n,
    and CPU guess is: ${cpuGuess} \n
    you guessed correctely.`;
  } else if (userGuess < cpuGuess) {
    // display too low
    message = `Sorry your guess is: ${userGuess}\n,
    and CPU guess is:  ${cpuGuess} \n
    you guess is too low, try again!`;
  } else {
    // display too high
    message = `Sorry your guess is: ${userGuess}\n,
    and CPU guess is:  ${cpuGuess} \n
    you guess is too high, try again!`;
  }
  //display message
  document.querySelector("h3").textContent = message;
};

// create an event listener for the button click event
document.getElementById("check").addEventListener("click", checkGuess);

// number of tries
// const maxTries = 10;
