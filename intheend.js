import { createInterface } from "readline";
const rl = createInterface ({
    input: process.stdin,
    output: process.stdout,
})


function goblok() {
    rl.question("Enter the first number : ", (num1) => {
    rl.question("Select the operation (+, -, *, /) : ", (operate) => {
        rl.question("Enter the second number : ", (num2) => {
            const ppq1 = parseFloat(num1)
            const ppq2 = parseFloat(num2)
            let result;
//the logic for math calculation
    if (operate === "+") result = ppq1 + ppq2
    else if(operate === "-") result = ppq1 - ppq2
    else if(operate === "*") result = ppq1 * ppq2
    else if(operate === "/") result = ppq1 / ppq2
    else { console.log("WHT R U DOING?")
    }
     console.log(`Result: ${result}`)
     rl.question("Do you want to count again? `(y/n) : ", (again) => {
    if (again.toLowerCase() === "y") {
        goblok();
    }
    else if (again.toLowerCase() === "n") {
        console.log("THX FOR USING MY SCRIPT DUDE")
         rl.close();
               }
            });
        });
    });
});
}

goblok();
