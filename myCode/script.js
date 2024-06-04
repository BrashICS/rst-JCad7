/*
Final Project (Rich Summative Task)
Game script.js
Author: Julian Cadieux
*/
'use strict'

let title = " "
let dashes = " "


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


function createGraphics () {
  document.getElementById("underscore").innerHTML = " "
    for (let i = 0; i < title.length; i++) {
      if (title[i] == " ") {
        dashes += (" ")
      } else {
        dashes += ("_")
      }
      document.getElementById("underscore").innerHTML = dashes
    }
}
