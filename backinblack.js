const readline = require("readline")

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the guess the number")
console.log("if you wrong guess reach 3 times your pc will blowup")

function guessgame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;


    function guessarea() {
        rl.question("Guess the number : ", (guess) => {
            const guessNumber = parseInt(guess)
            attempts++;
            
            if(isNaN(guessNumber)) {
                console.log("Enter a valid number shit")
                guessarea();
            }
            
            else if(guessNumber > secretNumber) {
                console.log("Higher than secret number")
                guessarea();
            }
            
            else if(guessNumber < secretNumber) {
                console.log("Lower than secret number")
                guessarea();
            }
            
            else {
                console.log(`Congrats you guess it, The secret number is :  ${secretNumber}`)
                console.log(`Your attempts : ${attempts}`)
            }
            rl.question("You want to play again? (y/n) : ", (again) => {
               if(again.toLowerCase() === "y") {
                guessgame();
               }
               else if(again.toLowerCase() === "n") {
                console.log("Thank you for using this script:)")
                rl.close();
               }
               else {
                console.log("Enter a valid answer dude")
               }
            });
        });
    }
    guessarea();
}

rl.on("close", () => { 
process.exit(0);
});

guessgame();