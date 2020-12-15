const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const answers = []
const wrongGuess = []


// Info om hur spelat fungerar och hur man börjar spela.
console.log("Välkommen!, Detta är hänga gubbe, spelet går ut på att du ska gissa ett ord.") 
console.log("Detta gör du genom att skriva in en bokstav. Om du har rätt så fylls i bokstaven i ordet.")
console.log("Om du har fel så förlorar du en chans, du har sju chanser innan gubben hängs.") 
console.log();

// Orden som spelaren ska gissa på.
// Dessa är slumpade när spelat börjar och bara en av orden väljs.
let wordlist = ["javascript", "programming", "index", "wallah", "spaghetti"];

// Funktionen för att slumpa orden som ligger i listan.
const word = wordlist [Math.floor(Math.random() * wordlist.length)];

let splitWord = word.split('')

for (var i = 0; i < word.length; i++) {
  answers[i] = "_";
}

const reLetters = word.length;

console.log("Här är ordet, Lycka Till!  ");
console.log();
console.log(word.split(''));

// Denna funktionen är för hur många liv som spelaren har.
// Om de tar slut så avslutas spelet direkt coh spelaren måste börja om.
let tries = 7

tries--;
  if (tries === 0) {
    console.log("Du har slut på försök, nu hängs gubben.")
    process.exit();
  }

// IF funktion för spelarens liv/chanser.
// 
rl.on('line', (input) => {
  let guess = parseInt(input)

  if (guess == word.split('')) {
    console.log("Du gissade rätt ord, Grattis!")
    process.exit();
  }
 
  else if (guess != word.split('')) {
    console.log("Du gissade fel, försök igen!")
  }

})