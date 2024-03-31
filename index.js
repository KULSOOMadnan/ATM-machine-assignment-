#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// current balaance 
console.log(chalk.bold.yellowBright("\n\t\t\t---------WELCOME TO ATM---------\t\t\t\n"));
let myBalance = 50000;
let myPin = 1767;
let pinCode = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: chalk.blue("please insert Your pin ")
    }
]);
//checking of pincode 
if (pinCode.Pin == myPin) {
    console.log(chalk.greenBright("\n\tcorrect Pin Code... \n"));
    // if pin is correct then this will run 
    let depositionWay = await inquirer.prompt([
        {
            name: "desirableWay",
            type: "list",
            message: chalk.blue("please choose one option.."),
            choices: ["Account Balance Check", "Withdraw", "Fast deposite"] // ask about desirable withdraw 
        }
    ]);
    // if check balance selected 
    if (depositionWay.desirableWay == "Account Balance Check") {
        // will print this
        console.log(chalk.yellowBright(`\nYour Current balance is ${myBalance}`));
    }
    else if (depositionWay.desirableWay == "Withdraw") { // if withdraw selected 
        let amount = await inquirer.prompt({
            name: "AmountNO",
            type: "number",
            message: chalk.blue("\nHow much amount you want to withdraw ") // ask the  withdraw amount 
        });
        if (amount.AmountNO > myBalance) // if user  ask amount beyond its  account balance 
         {
            console.log(chalk.redBright(`\nSORRY..!! You have insufficient balance.. `)); // will print this 
        }
        else // else print it 
         {
            let presentAmount = myBalance -= amount.AmountNO;
            console.log(chalk.rgb(78, 87, 90)(`\nYour remaining balance is : ${presentAmount}`));
        }
    }
    else if (depositionWay.desirableWay == "Fast deposite") {
        let multipleAmount = await inquirer.prompt([
            {
                name: "fast",
                type: "list",
                message: "\nplease select the withdraw Amount ",
                choices: ["5000", "2000", "10000", "8000", "3000", "780000"],
            }
        ]);
        if (multipleAmount.fast <= myBalance) {
            console.log(chalk.green(` Take your cash : ${multipleAmount.fast} $ \n`));
        }
        else {
            console.log(chalk.red("\t'non-sufficient funds...'"));
        }
    }
    console.log(chalk.magenta("\n\t\tTHANK YOu!\t\t"));
}
else {
    console.log(chalk.bold.red("\n\tIncorrect Pin Code "));
}
