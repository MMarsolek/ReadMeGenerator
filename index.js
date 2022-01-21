// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
//Inquirer .Prompt()?
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
        choices: ['MIT', 'Apache', 'GNU General Public', 'GNU Lesser General Public', 'BSD 3-Clause License'],
        message: 'What kind of license should your project have?'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null , '\t'), err =>{
        err ? console.log(err) :  console.log('Generating ReadMe...');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        writeToFile(`${answers.projectName}.json`, answers);
    })
}

// Function call to initialize app
init();
