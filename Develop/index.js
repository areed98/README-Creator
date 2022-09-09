// Include packages needed for this application
const inquirer = require("Inquirer");
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Project-Title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'Project-Description',
            message: 'Please fill out a description of your project.'
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please input what licenses you may have!',
            choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0', 'Other', 'No License']
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What is necessary to get the project installed?'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What is the intended use for the project, and what are some examples?'
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List the collaborators and other assets used to complete the project!'
        },
        // {
        //     type: 'list',
        //     name: 'Badges',
        //     message: 'Please select any badges that you would like to be shown on your project page!',
        //     choices: ['']
        // }

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
