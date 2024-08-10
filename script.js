let input = document.getElementById('input');
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng'); // Corrected selection
let Guesses = document.getElementById("Guesses")

let answer = Math.floor(Math.random() * 100 + 1)
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessesNumber();
})

function guessesNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrng.innerHTML = "Enter between 1 to 100";
    } else {
        numGuesses++;
        Guesses.innerHTML = "No of guess :"
            + numGuesses;
        if (input.value > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (input.value < answer) {
            wrng.innerHTML = "You Guessed too Low!"
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations! You guessed the Correct answer";
        }
    }
}
