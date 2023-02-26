#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

async function myBanner() {
  await showBanner("\nQuiz App", chalk.blue("Welcome!"), "green");
}
await myBanner();

async function Instructions() {
  console.log(`
      \nPlease read carefully!
      \nQuiz Instructions!
      \noThere are 5 questions at all.
      \noEach question carries 2 marks.
      \noThere is no negative marking.
      \noTotal score = 10
      \n`);
}
await Instructions();

async function quizApp() {
    type questions = {
        Question1: string;
        Question2: string;
        Question3: string;
        Question4: string;
        Question5: string;
    };
    let Questions: questions = await inquirer.prompt([
        {
            name: "Question1",
            type: "list",
            choices: [
                "John Resig",
                "Douglas Crockford",
                "Brendan Eich",
                "Eich Crockford",
            ],
            message: "Who created JavaScript?",
        },
        {
            name: "Question2",
            type: "list",
            choices: ["1984", "1995", "2001", "1996"],
            message: "When was JavaScript created?",
        },
        {
            name: "Question3",
            type: "list",
            choices: [
                "JScript",
                "MS Javascript",
                "MJavascript",
                "Advanced Javascript",
            ],
            message: "Microsoft Developed a compatible dialect of JavaScript called?",
        },
        {
            name: "Question4",
            type: "list",
            choices: [
                "Internet Explorer 2.0",
                "Netscape Navigator 1.0",
                "Netscape Navigator 2.0",
                "Internet Explorer 1.0",
            ],
            message:
            "Which was released in March 1996, featuring support for JavaScript.",
        },
        {
            name: "Question5",
            type: "list",
            choices: [
                "JScript",
                "LiveScript",
                "LiveServerScrpit",
                "ServerSideScript",
            ],
            message: "What is the old name of JavaScript?",
        },
    ]);
    let { Question1, Question2, Question3, Question4, Question5 } = Questions;
    let score = 0;
  if (Question1 === "Brendan Eich") {
    score += 2;
  }
  if (Question2 === "1995") {
    score += 2;
  }
  if (Question3 === "JScript") {
    score += 2;
  }
  if (Question4 === "Netscape Navigator 2.0") {
    score += 2;
  }
  if (Question5 === "LiveScript") {
    score += 2;
  }

  console.log(`Your score = ${score} out of 10`);
  if (score >= 8) {
    console.log(
      chalk.green(`\n
      ███    ███  █████  ██████  ██    ██ ███████ ██       ██████  ██    ██ ███████ 
      ████  ████ ██   ██ ██   ██ ██    ██ ██      ██      ██    ██ ██    ██ ██      
      ██ ████ ██ ███████ ██████  ██    ██ █████   ██      ██    ██ ██    ██ ███████ 
      ██  ██  ██ ██   ██ ██   ██  ██  ██  ██      ██      ██    ██ ██    ██      ██ 
      ██      ██ ██   ██ ██   ██   ████   ███████ ███████  ██████   ██████  ███████ 
                                                                                  
      `)
    );
  }
  if (score >= 4 && score < 8) {
    console.log(
      chalk.green(`\n
       ██████  ██████  ███████  █████  ████████ 
      ██       ██   ██ ██      ██   ██    ██    
      ██   ███ ██████  █████   ███████    ██    
      ██    ██ ██   ██ ██      ██   ██    ██    
       ██████  ██   ██ ███████ ██   ██    ██    
                                                
      `)
    );
  }
  if (score < 3) {
    console.log(
      chalk.green(`\n
       ██████   ██████  ██████  ███████ 
      ██    ██ ██    ██ ██   ██ ██      
      ██    ██ ██    ██ ██████  ███████ 
      ██    ██ ██    ██ ██           ██ 
       ██████   ██████  ██      ███████ 
      \n
████████ ██████  ██    ██      █████   ██████   █████  ██ ███    ██ 
   ██    ██   ██  ██  ██      ██   ██ ██       ██   ██ ██ ████   ██ 
   ██    ██████    ████       ███████ ██   ███ ███████ ██ ██ ██  ██ 
   ██    ██   ██    ██        ██   ██ ██    ██ ██   ██ ██ ██  ██ ██ 
   ██    ██   ██    ██        ██   ██  ██████  ██   ██ ██ ██   ████ 
                                                                    
      `)
    );
  }

  startAgain();
}
quizApp();

async function startAgain() {
  let againStart = await inquirer.prompt({
    type: "list",
    name: "restartAgain",
    choices: [`Yes`, `No`],
    message: chalk.bgBlue("\nDo you want to try again? "),
  });

  let user_Reqd = againStart.restartAgain;

  if (user_Reqd === `Yes`) {
    console.clear();
    quizApp();
  } else if (user_Reqd === `No`) {
    console.log(
      chalk.blueBright(`~~~~~~~~~~~~THANK YOU FOR USING APP~~~~~~~~~~~~`)
    );
  }
}
