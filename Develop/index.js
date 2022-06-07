// TODO: Include packages needed for this application
const generateMd = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your application do?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['None', 'MIT', 'Apache 2.0', 'GNU General Public License v3.0']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const newData = generateMd.generateMarkdown(data);
    fs.writeFile(fileName, newData, (err) =>
    err ? new Error(err) : console.log('New README created'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answer => writeToFile('README.md', answer))
        .catch(err => console.error(err));
}

// Function call to initialize app
init();