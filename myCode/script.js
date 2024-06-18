/*
Final Project (Rich Summative Task)
Game script: script.js
Author: Julian Cadieux
*/
'use strict'

let title = ""

let dashes = []
let guesses = 0
let letter = " "
let answer = " "
let word = " "
let input = []

document.getElementById("answerBox").addEventListener("keydown", keyTyper)
document.getElementById("finalGuessText").addEventListener("keydown", victory)

// Learned how to get the user input from the "radio" and the submit button from this website: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// This form is used to allow the user to select their word.
const form = document.querySelector("form")
const log = document.querySelector("#log")

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form)
    let output = ""
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`
    }
    log.innerText = output
    event.preventDefault()

    console.log(output[6])

    title = getTitle(parseInt(output[6]))
    //console.log(title)
    title = title.toLowerCase()
    createGraphics()
    document.getElementById("textbox").hidden = false
  },
  false,
);

// This function is used to create the dashed lines of the hidden word that the letters will be displayed on when typed in.
function createGraphics () {
  document.getElementById("underscore")
    for (let i = 0; i < title.length; i++) {
      if (title[i] === " ") {
        dashes.push(" ")
      } else {
        dashes.push("_")
      }
      document.getElementById("underscore").innerHTML = dashes.join("")
    }
}

// This function is used to listen for certain key pressess as well as weather or not the guess was right or wrong.
// When they get it right it will add the letter they selected to the dashes on the screen, otherwise it will load a new hangman image.
function keyTyper (event) {
  if (event.key === "Enter") {
    letter = document.getElementById("answerBox").value.toLowerCase();
    let value = false
    for (let i = 0; i <title.length; i++) {
      if (title[i] == letter) {
        input.push(letter)
        dashes[i] = letter
        for (let x = 0; x < dashes.length; x++){
          word += dashes[x]
        }
        word = dashes;
        document.getElementById("underscore").innerHTML = "" + dashes.join("")
        console.log(dashes)
        value = true

      }
    }
    if (value == false) {
      guesses++;
      document.getElementById("characters").innerText = letter.join(", ")
    }
    if (guesses == 1) {
      console.log(guesses)
      document.getElementById("hangThing").src= "../images/body1.png"
    }
    else if (guesses == 2) {
      console.log(guesses)
      document.getElementById("hangThing").src= "../images/body2.png"
    }
    else if (guesses == 3) {
      console.log(guesses)
      document.getElementById("hangThing").src= "../images/body3.png"
    }
    else if (guesses == 4) {
      console.log(guesses)
      document.getElementById("hangThing").src= "../images/body4.png"
    }
    else if (guesses == 5) {
      console.log(guesses)
      document.getElementById("hangThing").src= "../images/body5.png"
    }
    else if (guesses == 6) {
      console.log(guesses)
      document.getElementById("hangThing").src= "../images/body6.png"
    }
    if (guesses == 6) {
      alert ('You have run out of guesses! The word was ' + title + '. Click "OK" to try again. (Refreshes page)')
        window.location.reload()
    }
  }
  document.getElementById("answerBox").value = ""
}

// This function is used to allow the user to enter their final guess into a text box, when they do it will alert the user and when they press 'OK' it will refresh the page.
function victory(event) {
  if (event.key == "Enter" )
    if (document.getElementById("finalGuessText").value.toLowerCase() == title) {
      alert ('You won! Click "OK" to restart. (Refreshes page)')
        window.location.reload()
    } else {
      alert ('Incorrect! The word was '+ title)
        window.location.reload
    }

}
