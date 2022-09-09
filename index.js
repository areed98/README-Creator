// Include packages needed for this application
const inquirer = require("Inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// Question array created and validated
const questions = [
        {
            type: 'input',
            name: 'Title',
            message: 'What is the name of your project?',
            validate(Titleinput) {
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
            message: 'Please input what license you may have!',
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
            message: 'How do you use this application?',
            validate: Usageinput => {
                if (Usageinput) {
                    return true;
                } else {
                    console.log('Please provide information on how to use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'Please provide information on contributing.',
            validate: Contributioninput => {
                if (Contributioninput) {
                    return true;
                } else {
                    console.log('Please enter contribution information.');
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

// Create a README file with a static name, and our data.
function writeToFile(data) {
    fs.writeFile('Generated-README.md', data, err =>
    err ? console.log(err) : console.log('README Generated!'));
}

// Run inquirer so that it will prompt for questions, and then we can input answers that are returned
const init = () => {
    return inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            return answers;
        })
};


// Function call to initialize app
init()
// Takes returned answers and inserts them into the generateMarkdown function
.then(answers => {
    return generateMarkdown(answers);
})
// Runs the writeToFile function to create a file to store the generateMarkdown(answers) in
.then(create => {
    return writeToFile(create);
})
// Error catch
.catch(err => {
    console.log(err);
})
