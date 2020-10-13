const { listeners } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
const lines = []

function code(){
    let side1 = Number(lines[0])
    let side2 = Number(lines[1])
    let side3 = Number(lines[2])
    let side4 = Number(lines[3])

    let dice1 = (side1 + side2) / 2
    let dice2 = (side3 + side4) / 2
    
    if (dice1 > dice2) {
        console.log("Emma Won!");
    }
    else if (dice2 > dice1) {
        console.log("Gunnar Won!");
    }
    else if (dice1 == dice2) {
        console.log("It's a tie!");
    }
}

  rl.on('line', (input) => {
      lines.push(input)
        if (lines.length == 4){
            code(); {
                rl.close()
            }
        }
    });