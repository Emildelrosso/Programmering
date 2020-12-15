const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const num = Math.floor((Math.random() * 10) + 1)
  console.log("Guess a number between 1 and 10, Good Luck!")

  let tries = 5 

  rl.on('line', (input) => {
  let answer = parseInt(input)

  tries--;
    if (tries == 0) {
      console.log("You are our of tires!")
      process.exit();
    }

    if (answer == num) {
      console.log("You guessed the right number!")
      process.exit();
    }
   
    else if (answer > num) {
      console.log("Try a lower number!")
    }

    else if (answer < num) {
      console.log("Try a higher number!")
    }
    
  })