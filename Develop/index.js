// Include packages needed for this application
const inquirer = require("Inquirer");
const fs = require('fs');
const MarkdownMaker = require('./utils/generateMarkdown.js');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Title',
            message: 'What is the name of your project?',
            validate: Titleinput => {
                if (Titleinput) {
                    return true;
                } else {
                    console.log('Please enter a title name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please fill out a description of your project.',
            validate: Descriptioninput => {
                if (Descriptioninput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please input what licenses you may have!',
            choices: ['MIT', 'ISC', 'GPL-3.0', 'Apache-2.0', 'Unilicense', 'No License']
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What is necessary to get the project installed?',
            validate: Installationinput => {
                if (Installationinput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What is the intended use for the project, and what are some examples?',
            validate: Usageinput => {
                if (Usageinput) {
                    return true;
                } else {
                    console.log('Please provide information on what this is used for!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'List the collaborators and other assets used to complete the project!',
            validate: Contributioninput => {
                if (Contributioninput) {
                    return true;
                } else {
                    console.log('Please enter a list of contributers! (This includes you!)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Please provide information on how to test the application!',
            validate: Testinput => {
                if (Testinput) {
                    return true;
                } else {
                    console.log('Please provide instructions for testing!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please input your GitHub username!',
            validate: usernameinput => {
                if (usernameinput) {
                    return true;
                } else {
                    console.log('Please enter a username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input your email address!',
            validate: emailinput => {
                if (emailinput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        }
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('Generated-README.md', data, err =>
    err ? console.log(err) : console.log('README Generated!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            return answers;
        })
};


// Function call to initialize app
init()
.then(answers => {
    console.log(answers);
    return generateMarkdown(answers);
})
.catch(err => {
    console.log(err);
})
