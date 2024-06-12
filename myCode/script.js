/*
Final Project (Rich Summative Task)
Game script.js
Author: Julian Cadieux
*/
'use strict'

let title = []
let dashes = []
let guesses = " "
let key = " "
let letter = " "
let value = " "

document.getElementById("answerBox").addEventListener("keydown", keyTyper)

// Learned how to get the user input from the "radio" and the submit button from this website: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
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
    console.log(dashes)

}


// This function is used to listen for certain key pressess as well as weather or not the guess was right or wrong
function keyTyper (event) {
  value = false
  document.getElementById("underscore")
    if (document.getElementById("answerBox").value == 0) {
      for (let i = 0; i < title.length; i++) {
        if (title[i] == event.key) {
          dashes[i] = event.key
          value = true
        } else if (title[i] != event) {
          guesses++
          value = false
          imageloader()
        }
        document.getElementById("underscore").innerHTML = dashes.join("")
      }
    } else return(-1)

  console.log(event.key)

}

function imageloader() {
  if (value == false) {
    if (guesses = 1) {
      document.getElementById("body1").hidden = !document.getElementById("body1").hidden
    }
    if (guesses = 2) {
      document.getElementById("body2").hidden = !document.getElementById("body2").hidden
    }
    if (guesses = 3) {
      document.getElementById("body3").hidden = !document.getElementById("body3").hidden
    }
    if (guesses = 4) {
      document.getElementById("body4").hidden = !document.getElementById("body4").hidden
    }
    if (guesses = 5) {
      document.getElementById("body5").hidden = !document.getElementById("body5").hidden
    }
    if (guesses = 6) {
      document.getElementById("body6").hidden = !document.getElementById("body6").hidden
    }
  }
}


function victory(){
  if (dashes = title) {

  }
}

