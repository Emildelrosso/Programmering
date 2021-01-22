const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Olika Arrays för att få fram gissningarna och ordet.
const answer = []

const wrongGuesses = []

// Info om hur spelat fungerar och hur man börjar spela.
console.log("Välkommen!, Detta är hänga gubbe, spelet går ut på att du ska gissa ett ord.")
console.log("Detta gör du genom att skriva in en bokstav. Om du har rätt så fylls i bokstaven i ordet.")
console.log("Om du har fel så förlorar du en chans, du har sju chanser innan gubben hängs.")
console.log();
console.log("Här är ordet, Lycka Till!");

// Orden som spelaren ska gissa på.
// Dessa är slumpade när spelat börjar och bara en av orden väljs.
let wordlist = ["programmering", "index", "wallah", "spaghetti"];

// Funktionen för att slumpa orden som ligger i listan.
const word = wordlist[Math.floor(Math.random() * wordlist.length)];

// Denna funktionen är till för att gömma det slump valda ordet.
for (var i = 0; i < word.length; i++) {
  answer[i] = "_";
}

// Skriver ut det gömda ordet.
console.log(answer.join(" "));

let tries = 7

rl.on('line', (input) => {
  let guess = parseInt(input)

  // Denna funktionen är för hur många liv som spelaren har.
  // Om de tar slut så avslutas spelet direkt coh spelaren måste börja om.
  if (tries === 0) {
    console.log("Du har slut på försök, nu hängs gubben.")
    console.log("Ordet var " + word)
    process.exit();
  }

  if (input.length == 1) {
    let allWrong = true;
    for (let a = 0; a < word.length; a++) {
      if (input === word[a]) {
        answer[a] = word[a];
        allWrong = false;
      }
    }
    if (allWrong) {
      tries--;
      console.log("Du gissade fel! Nu har du " + tries + " försök kvar.")
    }
    else {
      console.log("Du gissade rätt!");
      console.log(answer.join(""))
    }
  }

  else if (answer.indexOf("_") == -1) {
    console.log("Du vann, Grattis!")
    process.exit();
  }

  else if (input.length !== 1) {
    console.log("Skriv bara EN bokstav, tack.")
  }

  else {
    for (var b = 0; b < word.length; b++) {
      if (word[b] === input) {
        answer[b] = input;
      }
    }
    console.log(answer.join(""))
  }
})