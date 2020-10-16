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
    let side5 = Number(lines[4])
    let side6 = Number(lines[5])
    let side7 = Number(lines[6])
    let side8 = Number(lines[7])

    let dice1 = (side1 + side2) / 2 + (side3 + side4) / 2
    let dice2 = (side5 + side6) / 2 + (side7 + side8) / 2
    
    if (dice1 > dice2) {
        console.log("Emma Won with " + dice1 + " points!");
    }
    else if (dice2 > dice1) {
        console.log("Gunnar Won with " + dice2 + " points!");
    }
    else if (dice1 == dice2) {
        console.log("It's a tie!");
    }
}

  rl.on('line', (input) => {
      lines.push(input)
        if (lines.length == 8){
            code(); {
                rl.close()
            }
        }
    });