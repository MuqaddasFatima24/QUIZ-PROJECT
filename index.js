import inquirer from "inquirer";
async function ASkQuestion() {
    const answers = await inquirer.prompt([{
            type: "list",
            name: "QuestionNo1",
            choices: ["Amazon", "MicroSoft", "Oracle", "TypeScript"],
            message: "Which of the following companies has develop TypeScript?",
        },
        {
            type: "list",
            name: "QuestionNo2",
            choices: ["Gradual", "Duck", "Dynamic", "All of the above"],
            message: "What is the typimg principle of TypeScript?",
        },
        {
            type: "list",
            name: "Questionno3",
            choices: ["tt", "tsx", "nod", ".ts"],
            message: "Which of the following fillname is the extension for TypeScript?",
        },
        {
            type: "list",
            name: "QuestionNo4",
            choices: ["JavaSCript", "C#", "Java", "All of the above"],
            message: "Which of the computer programming languages has infkuenced the creation of TypeScript?",
        },
    ]);
    const marks = 10;
    const fail = 0;
    if (answers.QuestionNo1 === "MicroSoft") {
        console.log("CONGRATULATIONS! Your answer is correct");
    }
    else
        () => {
            console.log("Answer is not correct");
        };
    if (answers.QuestionNo2 === "Dynamic") {
        console.log("CONGRATULATIONS! Your answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    ;
    if (answers.Questionno3 === ".ts") {
        console.log("CONGRATULATIONS! Your answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    ;
    if (answers.QuestionNo4 === "JavaScript") {
        console.log("CONGRATULATIONS! Your answer is correct");
    }
    else {
        console.log("Answer is not correct");
    }
    ;
}
;
ASkQuestion();
