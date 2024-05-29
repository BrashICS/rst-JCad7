/*
Final Project (Rich Summative Task)
Game script.js
Author: Julian Cadieux
*/
'use strict'

// Learned how to get the user input from this website: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);

