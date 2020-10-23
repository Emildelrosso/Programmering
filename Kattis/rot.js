const { join } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
const alf = "ABCDEFGHJKLMNOPQRSTUVWXYZ_."

rl.question("Enter text and a number here: ", (answer) => {
  let splitAnswer = answer.split(' ')

  let rotation = Number(splitAnswer[0])
  let message = splitAnswer[1]

  let result = ""

  for (const letter of message) {
      let letterIndex = alf.indexOf(letter)

      let newIndex = letterIndex + rotation

      if (newIndex > 27) {
          newIndex = newIndex - 28
      }

      let newLetter = alf[newIndex]

      result += newLetter
  }
  let rResult = result.split('').join('')
  console.log(rResult)

  rl.close()

})