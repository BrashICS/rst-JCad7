/*
Final Project (Rich Summative Task)
Game script.js
Author: Julian Cadieux
*/
'use strict'

let title = ""
let dashes = ""
let invisible = ""


function createGraphics() {
  document.getElementById("underscore")

  for (let i = 0; i < title.length; i++) {
    if (title[i] == " ") {
      dashes += (" _ ")
    } else {
      dashes += (" ")
    }
  }
  // document.getElementById("underscore").innerHTML = "" + invisible.split()
  // invisible = invisible.split("")
  // console.log("")
}

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

