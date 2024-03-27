#! /usr/bin/env node 

import inquirer from "inquirer"
// current balaance 
let myBalance = 500000;
let myPin = 1767;

let pinCode = await inquirer.prompt(
    [
        {
            name : "Pin",
            type : "number",
            message : "please insert Your pin "

        }
    ]
 )
//checking of pincode 

if(pinCode.Pin == myPin){

    console.log("correct Pin Code... ");

// if pin is correct then this will run 
  let depositionWay = await inquirer.prompt(
    [
        {
            name : "desirableWay",
            type : "list",
            message : "please choose one option..",
            choices : ["Account Balance Check", "Withdraw", "Fast deposite"] // ask about desirable withdraw 
        }
    ]
  )
   // if check balance selected 
    if (depositionWay.desirableWay ==  "Account Balance Check"){
       
    // will print this
      console.log(`Your Current balance is ${myBalance}`);

    }
    else if (depositionWay.desirableWay == "Withdraw") // if withdraw selected 
    {
    let amount = await inquirer.prompt(
        {
            name : "AmountNO",
            type : "number",
            message : "How much amount you want to withdraw " // ask the  withdraw amount 

        }
    )
        if(amount.AmountNO > myBalance) // if user  ask amount beyond its  account balance 
            {
            console.log(`SORRY..!! You have insufficient balance.. `); // will print this 
                
            }
        else    // else print it 
        {
                
                let presentAmount = myBalance -= amount.AmountNO
                console.log(`Your remaining balance is : ${presentAmount}`);
        }
        
        }
    else if (depositionWay.desirableWay == "Fast deposite"){

        let multipleAmount = await inquirer.prompt(
            [
                {
                    name : "multiAmount",
                    type : "list",
                    message: "please select the withdraw Amount ",
                    choices : ["5000$","2000$", "10000$", "8000$"],
                }
            ]

        )
         console.log(` Take your cash : ${multipleAmount.multiAmount} $ `);
        

    }
           console.log("THANK YOu! ");
        
}   

else {
    console.log("Incorrect Pin Code ");
    
}