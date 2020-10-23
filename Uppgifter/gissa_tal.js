const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

 rl.question("Guess a number between 1 and 10: ", (answer) => {
  const num = Math.floor((Math.random() * 10) + 1)
  console.log(answer);
  
    if (answer == num)
      console.log("You guessed the right number!")

    else if (answer > num)
      console.log("Try a lower number.")

    else if (answer < num)
      console.log("Try a higher number:")

})