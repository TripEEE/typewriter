const { delay } = require("lodash")
const process = require("process")

const printLettersStaggered = function (str) {
  let delay = 200
  for (const letter of str) {
    setTimeout(() => {
    process.stdout.write(letter)
    }, delay)
    delay += 100 //this changes the delay after the first iteration
  }
}

printLettersStaggered('hello there from lighthouse labs\n')
