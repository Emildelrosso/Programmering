const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Info om hur spelat fungerar och hur man börjar spela.
console.log("Välkommen!, Detta är hänga gubbe, spelet går ut på att du ska gissa ett ord.") 
console.log("Detta gör du genom att skriva in en bokstav. Om du har rätt så fylls i bokstaven i ordet.")
console.log("Om du har fel så förlorar du en chans, du har sju chanser innan gubben hängs.") 
console.log("För att börja spela skriv 'Start' i terminalen. Lycka till!")

// Orden som spelaren ska gissa på.
// Dessa är slumpade när spelat börjar och bara en av orden väljs.
let ord = ["never", "gonna", "give", "you", "up", "never", "gonna", "let", "you", "down"]

// Funktionen för att slumpa orden.
const lista = ord [Math.floor(Math.random() * ord.length)]