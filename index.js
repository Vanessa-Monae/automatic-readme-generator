// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const genMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license type',
        choices: ['None', 'MIT', 'BSD_3','APACHE_2.0', 'GPL_3.0', 'BSD 3'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing instructions for the project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give instructions on how to test the project',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((response) => {
        console.log("response= ", response);
    })
}


// Function call to initialize app
init();
