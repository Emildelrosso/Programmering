let index = 0

let names = ["Niklas", "Oliver", "Emil", "Adam", "David"]

for (let i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i])
}

let foundEmil = false

while (!foundEmil) {
    if (names[index] === "Emil") {
        foundEmil = true
    }
    else {
        index ++
    }
}

console.log("I found Emil at Index " + index)