const maxNum = 5

function generateRandomNumber(maxNumber) {
    let correctNumber = Math.floor(Math.random() * maxNumber + 1)
    console.log('correctNumber:', correctNumber)
    document.getElementById("userNumber").innerHTML = 'Random number generated: ' + correctNumber
    return correctNumber
}

let random = generateRandomNumber(maxNum)

function resetGame() {
    random = generateRandomNumber(maxNum)
    document.getElementById("guess-output-counter").innerHTML = 'Number of guesses: '
    document.getElementById("guess-output-text").innerHTML = 'Random number guessed: '
}

document.getElementById("guess").onclick = function () {
    let isGuessed = false;
    let guessCount = 1;


    while (isGuessed == false) {
        let compGuess = Math.floor(Math.random() * 6);
        console.log('Is the correct number:', compGuess + '?')
        document.getElementById("guess-output-text").innerHTML = 'Random number guessed: ' + compGuess
        if (compGuess == random) {
            console.log("I guessed correct, the number is " + compGuess + ". It took me " + guessCount + " guesses");
            isGuessed = true;
        } else if (guessCount > 3) {
            break;
        } else {
            guessCount++;
            document.getElementById("guess-output-counter").innerHTML = 'Number of guesses: ' + guessCount
        }
        console.log('Tries', guessCount)
    }

    if (isGuessed == false) {
        console.log("I could not get it! I gave up after 4 guesses");
    }
}