const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


//A list of questions that the user will answer
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD 2-Clause','BSD 3-Clause','Creative Commons Licenses'],
        message: 'What kind of license should your project have?'
    },
    {
        type: 'list',
        name: 'color',
        choices: ['green', 'yellow', 'red','blue','orange','lightgrey'],
        message: 'What color would you like your license badge?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What kind of command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'using',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
    },
];


//Takes the desired fileName and answers given by the user and writes them to a file using fs
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        err ? console.log(err) :  console.log('Generating ReadMe...');
    })
}


//Initializes the program and calls the functions to write the file and generate the markdown
function init() {
    inquirer.prompt(questions).then(answers =>{
        writeToFile(`${answers.projectName}.md`, generateMarkdown(answers));
    })

}

// Function call to initialize app
init();
