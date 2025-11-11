import readline from "readline";

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});


const userPIN = "1234";
const birth = "23/07/2009"
let balance = 1000000;
let attempts = 0;

console.log("Welcome to mini ATM dude")


function login() {
    rl.question("Please enter your pin for login to your account : ", (inputPin) => {
        attempts++;
        if(inputPin === userPIN) {
            console.log("Welcome to your bank account");
            menu();
            return;
        } else {
            console.log("Your pin is wrong");
        }
         if(attempts >= 3) {
            console.log("Your atm has been locked, to open please enter your birthday : ");
            unlock()
            return;
        }
        else {
            console.log(`Chance to login ${3 - attempts}\n`);
            login();
            return;
        }

    });
}


function menu() {
        console.log("Welcome to main menu of your bank account")
        console.log("=============================");
         console.log("1. Cek Saldo");
         console.log("2. Tarik Uang");
         console.log("3. Setor Uang");
         console.log("4. Keluar");
         console.log("=============================");
         rl.question("Select Menu : ", (choice) => {
            switch (choice) {
                case "1":
                    console.log(`Your Money ${balance}`);
                    menu();
                    break;
                    case "2":
                        tariktunai();
                        break;
                        case "3":
                            setortunai();
                            break;
                            case "4":
                                console.log("Thankyou for using this")
                                rl.close();
                                break;
                                default:
                                    console.log("Enter a valid message")
                                    menu();
                                    break;
            }
         });

}


function tariktunai() {
    rl.question("Enter the amount to be withdraw : ", (amount) => {
        amount = Number(amount);
        if(isNaN(amount)) {
            console.log("Please enter a valid number")
            menu();
            return;
        }
        if(amount > balance) {
            console.log("Your balance is not enough, sorry")
            menu();
            return;
        }
        balance -= amount
        console.log(`successfully withdrew the balance : ${amount}`);
        console.log(`your remaining balance : ${balance}`);
        menu();
        return;
    });
}







function unlock() {
    rl.question("Enter your birthday to unlock your bank account (23/07/2009) : ", (birthEnter) => {
        if(birthEnter === birth) {
            console.log("Congrats your account has unlocked");
            login();
        }
        else {
            console.log("Sorry your account still locked");
            rl.close();
        }
    });
}


login();