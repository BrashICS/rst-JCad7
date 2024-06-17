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
    console.log(title)

    createGraphics()
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
// When they get it right it will add the letter they selected to the dashes on the screen, otherwise it will load a new body part image.
function keyTyper (event) {
  if (event.key === "Enter") {
    letter = document.getElementById("answerBox").value;
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
        document.getElementById("characters").innerText = letter
      }
    }
    if (value == false) {
      guesses++;
      document.getElementById("characters").innerText = letter
    }
    if (guesses == 1) {
      console.log(guesses)
      document.getElementById("body1").hidden = !document.getElementById("body1").hidden
    }
    if (guesses == 2) {
      console.log(guesses)
      document.getElementById("body2").hidden = !document.getElementById("body2").hidden
    }
    if (guesses == 3) {
      console.log(guesses)
      document.getElementById("body3").hidden = !document.getElementById("body3").hidden
    }
    if (guesses == 4) {
      console.log(guesses)
      document.getElementById("body4").hidden = !document.getElementById("body4").hidden
    }
    if (guesses == 5) {
      console.log(guesses)
      document.getElementById("body5").hidden = !document.getElementById("body5").hidden
    }
    if (guesses == 6) {
      console.log(guesses)
      document.getElementById("body6").hidden = !document.getElementById("body6").hidden
      alert ('You have run out of guesses! Click "OK" to try again. (Refreshes page)')
        window.location.reload()
    }
  }
}

// This function is used to allow the user to enter their final guess into a text box, when they do it will alert the user and when they press 'OK' it will refresh the page.
function victory(event) {
  if (event.key == "Enter" )
    if (document.getElementById("finalGuessText").value == title) {
      alert ('You won! Click "OK" to restart. (Refreshes page)')
        window.location.reload()
    } else {
      alert ('Incorrect!')
    }

}

